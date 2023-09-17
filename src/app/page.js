"use client";
import { useState } from "react";
import TwoChoiceSelector from "./components/twoChoiceSelector";
import StoryBuilder from "./components/StoryBuilder";
import Link from "next/link";
import Image from "next/image";
import { useData } from "./components/ContextProvider";
import { Main } from "next/document";



const THEMES = [
  "Thriller",
  "Mystery",
  "Shojo",
  "Romance",
  "Slice of Life",
  "Horror",
  "Mecha",
  "Comedy",
  "Josei",
  "Shonen",
  "Kodomo",
  "Yaoi",
  "Jujutsu Kaisen",
  "Gegika",
  "Harem",
  "Kodomomuke",
  "Seinen",
  "Adventure",
];

const SCROLLS = ["Vertical", "Horizontal"];

const READ = ["Left to Right", "Right to Left"];


export default function Home() {
  console.log(process.env.NEXT_PUBLIC_API_KEY)
  let {data, setData} = useData();

  // first
  const [storyline, setStoryline] = useState(
    "A mystery/thriller manga that starts with a dark scene in Shibuya"
  );

  // second
  const [descriptiveWords, setDescriptiveWords] = useState(new Set([]));

  // third **USE MAXTOKENS FOR MAXTOKENS**
  const [maxTokens, setMaxTokens] = useState(1380)
  const [wordCount, setWordCount] = useState(300);

  // fourth
  const [scrollPreference, setScrollPreference] = useState(SCROLLS[0]);

  // fifth
  const [readPreference, setReadPreference] = useState(READ[0]);

  // last
  const [prompt, setPrompt] = useState("");

  const wordHandler = () => {
    setWordCount(wordCount);
    setMaxTokens(wordCount * 4.6)
  };

  const scrollSelection = (preference) => {
    setScrollPreference(preference);
  };

  const readSelection = (preference) => {
    setReadPreference(preference);
  };

  const getDescriptiveWords = (descriptiveWords) => {
    setDescriptiveWords(descriptiveWords);
  };

  const submitHandler = () => {
    wordHandler();
    setData({
      description: storyline,
      genres: [...descriptiveWords],
      maxTokens: maxTokens
    })
  }

  return (
    <main className="bg-htnwhite scroll-smooth">
      {/* INTRODUCTION PAGE */}
      <div className="items-start float-left">
        <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.451/build/spline-viewer.js"></script>
        <spline-viewer loading-anim url="https://prod.spline.design/i0CY4bnK4MTIVN-H/scene.splinecode"></spline-viewer>
      </div>
      <div className="w-137 z-5 bg-bgcolor"></div>
      {/* ABOUT PAGE */}
      <main className="flex items-start min-h-screen w-full flex-wrap justify-between p-24">
      
        <div className="h-full m-auto">
          <div className="float-left text-left w-2/4 text-4xl flex flex-wrap font-semibold m-auto">
            Start writing or share your own storyline
          </div>
          <div className="float-right w-2/4 flex flex-wrap">
            <textarea
              id="message"
              rows="4"
              className="flex p-2.5 float-right w-3/4 ml-10 h-max
                resize-y overflow-x-clip box-border text-sm text-gray-900 rounded-lg border border-gray-300 
                dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black rows-10 col-30 "
              placeholder="A mystery/thriller manga that starts with a dark scene in Shibuya..."
              onChange={(e) => setStoryline(e.target.value)}
            ></textarea>
            <a href="#categories" className="text-center float-right w-3/4 mt-3 ml-10 p-2 rounded-2xl bg-htnblack text-htnwhite">
              Next
            </a>
          </div>
        </div>
      </main>
      {/* Categories */}
      <main id="categories" className=" flex bg-bgcolor min-h-screen w-full  flex-col items-center justify-between p-24">
        <div>
          <div className="float-left text-left w-2/4 text-4xl flex flex-wrap font-semibold">
            How would you describe your story?
            <p className="float-left text-left w-2/4 text-lg mt-10 font-medium">
              Select at least three words.
            </p>
          </div>
          <div className="float-left w-2/4 ">
            <StoryBuilder
              list={THEMES}
              descriptiveWords={getDescriptiveWords}
            ></StoryBuilder>
          </div>
        </div>
      </main>

      {/* ADDITIONAL DETAILS */}
      <main id="additionalDetails" className="flex items-start bg-bgcolor min-h-screen w-full flex-wrap  justify-between p-24">
        <div className=" w-2/4 text-4xl flex flex-col font-semibold">
          Additional Details
          <p className="text-lg text-gray-500 mt-3 m:mt-10 font-medium">
            (This is optional)
          </p>
        </div>
        <div className="float-left w-2/4">
          <p className="text-[20px] my-3">Word limit ({wordCount})</p>
          <input
            onChange={(e) => setWordCount(e.target.value)}
            className=" accent-htnblack  w-full"
            type="range"
            min="100"
            max="500"
            defaultValue={wordCount}
          ></input>
          <p className="text-[20px] my-4">Scrolling direction:</p>
          <TwoChoiceSelector
            pair={SCROLLS}
            preference={scrollSelection}
          ></TwoChoiceSelector>
          <p className="text-[20px] my-4">Reading from:</p>
          <TwoChoiceSelector
            pair={READ}
            preference={readSelection}
          ></TwoChoiceSelector>
          <Link href="/results" onClick={submitHandler} >
            <p className="rounded-2xl text-center font-medium w-full p-2 bg-htnblack border-2 border-htnblack m-1 text-htnwhite mt-8">Generate story</p>
          </Link>
        </div>
      </main>
    </main>
  );
}
