"use client";
import Image from "next/image";
import { Spinner, Skeleton, SkeletonText } from "@chakra-ui/react";
import { useData } from "../components/ContextProvider";
import { useState, useEffect } from "react";
import axios from "axios";
const cohere = require("cohere-ai");
import Link from "next/link";

const API_URL = "https://api.cohere.ai/v1/generate";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
cohere.init(API_KEY); // This is your trial API key

const page = () => {
  let { data } = useData();
  console.log(data);

  if (Object.keys(data).length == 0)
    return (
      <div className="w-screen h-screen flex">
        <div className="m-auto text-5xl">Error: no data found</div>
      </div>
    );

  const [summary, setSummary] = useState("");
  const [titles, setTitles] = useState([]);
  const [spinnerVisible, setSpinnerVisible] = useState(false);
  const [imageSources, setImageSources] = useState([]);

  const fetchImage = async (summary) => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_STABLE_DIFFUSION_URI,
        {
          prompt: summary,
          negative_prompt: null,
          height: 768,
          width: 768,
          num_inference_steps: 50,
          guidance_scale: 7.5,
          eta: 0,
          lora_weights: null,
        },
        {
          responseType: "blob",
        }
      );

      const imageUrl = URL.createObjectURL(response.data);

      // Update the state with the Data URL
      setImageSources((old) => [...old, imageUrl]);
    } catch (error) {
      console.error("Error fetching the image:", error);
    }
  };

  const queueImages = async (summaries) => {
    for (const summary of summaries) {
      await fetchImage(summary);
    }
  };

  const generateHandler = async (summary) => {
    setSpinnerVisible(true)
    setImageSources([])

    let paragraphs = summary.split("\n\n");

    if (paragraphs.length == 1) {
      paragraphs = new Array(4).fill(summary);
    }

    queueImages(paragraphs);
  };

  useEffect(() => {
    const generateTitle = (data) => {
      let n = 5;
      return `I am writing a graphic novel. The genre combines ${data.genres
        .slice(0, n - 1)
        .join(", ")} and ${
        data.genres[n - 1]
      } and you can sum it up by saying it's ${data.description}.
      Help me come up with titles that would match the description of the novel within this genre and description. Provide the title in the following format: [Title 1], [Title 2], [Title 3], [Title 4], [Title 5]. For example, a book about a dragon and a girl could be formmatted like the following: [Girl and the Dragon Tatoo], [Terror of Dragonvale], [Scales and Gals], [Legend of the Dragon: A woman's journey], [Dragons: Will they ever be a woman's friend?]`;
    };

    const generateSummary = (data, title) => {
      let n = data.genres.length;
      return `I'm writing a graphic novel with the title: ${title} and it has the following genre's: ${data.genres
        .slice(0, n - 1)
        .join(", ")} and ${
        data.genres[n - 1]
      }. You can also say this movie involves: ${
        data.description
      }. Help me come up with a synopsis to a movie with mentioned criteria. Provide your reply in the following format and limit the word count to less than 300 words: \n\nSynopsis: BRIEF OVERVIEW OF THE STORY AND ITS MAIN CHARACTERS\n\nHere is an example:\n\nTitle ideas: [Shadows of Waterloo], [Whispered Secrets in Ontario], [Twilight E7], [Twisted Fate],[Monochromatic Mystique], [Lover's Labyrinth: Paris Noir]\n\nSynopsis: In the heart of the city, under the pulsating lights of the sun, an enigmatic romance unfolds. A seemingly ordinary young human with a hidden past, becomes entwined with a accountant seeking the truth behind a decade-old disappearance case. As love blossoms, so do secrets, turning their world into a maze of deception, passion, and danger. At the intersection of curiousity and danger, can one conquer all?`;
    };

    const updateTitle = async () => {
      let titleResult = await axios.post(
        API_URL,
        {
          prompt: generateTitle(data),
          model: "command",
          stream: false,
          num_generations: 1,
          max_tokens: data.maxTokens,
          temperature: 0.3,
        },
        {
          headers: {
            authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      titleResult = titleResult.data.generations[0].text;
      updateSynopsis(titleResult);
      console.log(titleResult);

      setTitles(
        titleResult.split(",").map((s) => s.trim().slice(1, s.length - 2))
      );
      console.log(titles);
    };

    const updateSynopsis = async (titleResult) => {
      let synopsisResult = await axios.post(
        API_URL,
        {
          prompt: generateSummary(data, titleResult),
          model: "command",
          stream: false,
          num_generations: 1,
          max_tokens: data.maxTokens,
          temperature: 0.35,
        },
        {
          headers: {
            authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      synopsisResult = synopsisResult.data.generations[0].text;
      console.log(synopsisResult);

      setSummary(synopsisResult);
      console.log(summary);
    };

    updateTitle();
  }, []);

  return (
    <main className=" flex justify-between border-y-2 min-h-screen w-full">
      <div className="flex flex-col w-1/2 min-w-[30rem] border-r-2 shadow-xl border-gray-200 px-6 py-10 transition-all">
        <div className="mb-16">
          <Link href="/">
            <Image
              className="absolute -top-5 -left-24"
              src="/small_logo.gif"
              width={400}
              height={400}
              alt="small_logo"
            ></Image>
          </Link>
        </div>
        {titles.length ? (
          <h2 className="text-4xl mt-10 mb-6">{titles[0]}</h2>
        ) : (
          <Skeleton height="40px" className="mt-10 mb-6" />
        )}
        {summary ? (
          <textarea
            defaultValue={summary}
            type="textarea"
            className="border-inner border-[1.5px] border-black rounded-lg flex-grow shadow-inner px-2 py-3"
            onChange={(e) => setSummary(e.target.value)}
          ></textarea>
        ) : (
          <div className="border-inner border-[1.5px] border-black rounded-lg flex-grow shadow-inner px-2 py-3 flex flex-col gap-y-5">
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
            <SkeletonText mt="4" noOfLines={8} spacing="4" skeletonHeight="2" />
          </div>
        )}

        <button
          className="rounded-2xl text-center font-medium text-xl w-full p-2 bg-htnblack border-2 border-htnblack m-1 text-htnwhite mt-8"
          onClick={() => generateHandler(summary)}
        >
          Generate
        </button>
      </div>
      <div className="flex h-screen overflow-auto w-full">
        {imageSources.length == 0 ? (
          <Spinner size='xl' className={`m-auto ${spinnerVisible ? "opacity-100": "opacity-0"}`}/>
        ) : (
          <div
            className={`m-auto flex ${
              data.scrollPreference == "Vertical" ? "flex-col" : "flex-row"
            }`}
          >
            {imageSources.map((imageSrc, key) => {
              return <img className="" src={imageSrc} />;
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default page;
