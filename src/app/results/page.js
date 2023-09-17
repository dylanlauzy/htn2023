"use client"
import Image from "next/image";
import { useData } from "../components/ContextProvider";
import axios from "axios";

const API_URL = "https://api.cohere.ai/v1/generate"
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const page = async () => {
  let {data, setData} = useData()


  const generateTitle = (data) => {
    let n = 5;
    return `I am writing a graphic novel. The genre combines ${data.genres.slice(0, n-1).join(", ")} and ${data.genres[n - 1]} and you can sum it up by saying it's ${data.description}.
    Help me come up with titles that would match the description of the novel within this genre and description. Provide the title in the following format: [Title 1], [Title 2], [Title 3], [Title 4], [Title 5]. For example, a book about a dragon and a girl could be formmatted like the following: [Girl and the Dragon Tatoo], [Terror of Dragonvale], [Scales and Gals], [Legend of the Dragon: A woman's journey], [Dragons: Will they ever be a woman's friend?]` 
  }

  const generateSummary = (data, title) => {
    let n = data.genres.length
    return `I'm writing a graphic novel with the title: ${title} and it has the following genre's: ${data.genres.slice(0, n - 1).join(", ")} and ${data.genres[n - 1]}. You can also say this movie involves: ${data.description}. Help me come up with a synopsis to a movie with mentioned criteria. Provide your reply in the following format and limit the word count to less than 300 words: \n\nSynopsis: BRIEF OVERVIEW OF THE STORY AND ITS MAIN CHARACTERS\n\nHere is an example:\n\nTitle ideas: [Shadows of Shibuya, Whispered Secrets in Monochrome, Twilight Trysts and Twisted Ties, Monochromatic Mystique, Lover's Labyrinth: Shibuya Noir]\n\nSynopsis: In the bustling heart of Tokyo, under the pulsating lights of Shibuya, an enigmatic romance unfolds. Ami, a seemingly ordinary young woman with a hidden past, becomes entwined with Daiki, a journalist seeking the truth behind a decade-old disappearance case. As love blossoms, so do secrets, turning their world into a maze of deception, passion, and danger. At the intersection of love and mystery, can love truly conquer all?`
  }


  let titleResult = await axios.post(API_URL, {
    prompt: generateTitle(data),
    model: "command",
    stream: false,
    num_generations: 1,
    max_tokens: data.maxTokens,
    temperature: 0.2,
  }, {
    headers: {
      authorization: `Bearer ${API_KEY}`      
  }})
  
  
  let synopsisResult = await axios.post(API_URL, {
    prompt: generateSummary(data, titleResult),
    model: "command",
    stream: false,
    num_generations: 1,
    max_tokens: data.maxTokens,
    temperature: 0.2,
  }, {
    headers: {
      authorization: `Bearer ${API_KEY}`      
  }})

  titleResult = titleResult.data.generations[0].text
  synopsisResult = synopsisResult.data.generations[0].text

  console.log(titleResult)
  console.log(synopsisResult)

 

  
  let titles = titleResult.split(",").map((s) => s.trim().slice(1, s.length - 2))

  console.log(titles)

  let summary = synopsisResult
  console.log(summary)

  return (
    <main className=" flex justify-between border-y-2 min-h-screen w-full">
      <div className="flex flex-col w-1/2 border-r-2 shadow-xl border-gray-200 px-6 py-10">
        <div className="mb-16"><Image
        src="small_logo.gif"
        width={100}
        height={100}
        alt="small_logo"
        ></Image></div>
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
