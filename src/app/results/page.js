"use client"

import { useData } from "../components/ContextProvider";
import axios from "axios";

const API_URI = "https://api.cohere.ai/v1/generate"
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const page = async () => {
  let {data, setData} = useData()

  const generatePrompt = (data) => {
    let n = data.genres.length
    return `I'm writing a graphic novel. The genre combines ${data.genres.slice(0, n - 1).join(", ")} and ${data.genres[n - 1]} and you can sum it up by saying it's ${data.description}. Help me come up with some interesting title ideas and an exciting script. Provide the answer in the following format and limit the word count of the synopsis and scene 1 to 500 words:\n\nTitle ideas: [TITLE_1, TITLE_2, TITLE_3, TITLE_4, TITLE_5]\n\nSynopsis: BRIEF OVERVIEW OF THE STORY AND ITS MAIN CHARACTERS\n\nScene 1: DESCRIBE DETAILS ABOUT THE CHARACTERS APPEARANCE, THEIR SURROUNDING, THEIR MOOD, THEIR CLOTHING AND THE WEATHER. SEPARATE EACH PHRASE WITH A COMMA\n\nHere is an example:\n\nTitle ideas: [Shadows of Shibuya, Whispered Secrets in Monochrome, Twilight Trysts and Twisted Ties, Monochromatic Mystique, Lover's Labyrinth: Shibuya Noir]\n\nSynopsis: In the bustling heart of Tokyo, under the pulsating lights of Shibuya, an enigmatic romance unfolds. Ami, a seemingly ordinary young woman with a hidden past, becomes entwined with Daiki, a journalist seeking the truth behind a decade-old disappearance case. As love blossoms, so do secrets, turning their world into a maze of deception, passion, and danger. At the intersection of love and mystery, can love truly conquer all?\n\nScene 1: Ami, raven-black hair cascading down, icy blue eyes, wearing a flowing white dress that contrasts starkly with the darkness around, a single red rose clutched in her hand. Daiki, sharp jawline, deep-set brown eyes filled with intensity, dressed in a sleek black suit, hair tousled from the wind. Around them, Shibuya's neon lights cast tall, eerie shadows, people pass like phantoms, the famed Shibuya Crossing turned chaotic by the sudden downpour. Rain relentlessly soaks the city, droplets reflecting the white-hot lights, the atmosphere heavy, electric, foreboding. Both Ami and Daiki stand still, two pillars in a world of motion, eyes locked, souls intertwined.`
  }
  
  let result = await axios.post(API_URI, {
    prompt: generatePrompt(data),
    model: "command",
    stream: false,
    num_generations: 1,
    max_tokens: data.maxTokens,
    temperature: 0.2,
  }, {
    headers: {
      authorization: `Bearer ${API_KEY}`      
  }})

  console.log(result)

  result = result.data.generations[0].text

  let match = result.match(/\[(.*)\]/);
  let titles = match && match[1] ? match[1].split(", ") : [];
  console.log(titles)

  let summary = result.split("\n\n")[1]
  console.log(summary)

  return (
    <main className=" flex justify-between border-y-2 min-h-screen w-full">
      <div className="flex flex-col min-w-[22rem] border-r-2 shadow-xl border-gray-200 px-6 py-10">
        <div className="mb-16">Logo</div>
        <h2 className="text-4xl mb-6">{titles[0]}</h2>
        <textarea
          type="textarea"
          className="border-inner border-[1.5px] border-black rounded-lg flex-grow shadow-inner px-2 py-3"
        >{summary}</textarea>
        <button
          className="rounded-2xl text-center font-medium w-full p-2 bg-htnblack border-2 border-htnblack m-1 text-htnwhite mt-8"
        >
          Generate
        </button>
      </div>
      <div>story</div>
    </main>
  );

};

export default page;
