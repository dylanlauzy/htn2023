"use client";
import axios from "axios";
import { Suspense, useState } from "react";
import TwoChoiceSelector from "./components/twoChoiceSelector";
import StoryBuilder from "./components/StoryBuilder";

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

// let practicePrompt = "Create a title and a manga story in the format: [Title] // [Story]"

// const options = {
//   method: "POST",
//   url: "https://api.cohere.ai/v1/generate",
//   headers: {
//     accept: "application/json",
//     "content-type": "application/json",
//     // authorization: "Bearer w2DD7JIkLyxtvA0zDcIgq5X9sM2HJoAWSxQAkre0",
//   },
//   data: {
//     max_tokens: 20,
//     truncate: "END",
//     return_likelihoods: "NONE",
//     prompt: practicePrompt,
//     temperature: 3.0,
//   },
// };

export default function Home() {
  const [story, setStory] = useState("");

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     setStory(response.data.generations[0].text);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  // first
  const [storyline, setStoryline] = useState(
    "A mystery/thriller manga that starts with a dark scene in Shibuya"
  );

  // second
  const [descriptiveWords, setDescriptiveWords] = useState(new Set([]));

  // third
  const [wordCount, setWordCount] = useState(300);

  // fourth
  const [scrollPreference, setScrollPreference] = useState(SCROLLS[0]);

  // fifth
  const [readPreference, setReadPreference] = useState(READ[0]);

  // last
  const [prompt, setPrompt] = useState("");

  const wordHandler = () => {
    setWordCount(wordCount / 4.6);
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

  const promptHandler = () => {
    setPrompt(storyline + " " + "descriptiveWords");
  };

  return (
    <main className="bg-htnwhite scroll-smooth">
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
              class="flex p-2.5 float-right w-3/4 ml-10 h-max
                resize-y overflow-x-clip box-border text-sm text-gray-900 rounded-lg border border-gray-300 
                dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black rows-10 col-30 "
              placeholder="A mystery/thriller manga that starts with a dark scene in Shibuya..."
              onChange={(e) => setStoryline(e.target.value)}
            ></textarea>
            <a
              className="float-right w-3/4 mt-3 ml-10 p-2 rounded-full bg-htnblack text-htnwhite text-center"
              href="#categories"
            >
              Next
            </a>
          </div>
        </div>
      </main>
      {/* Categories */}
      <main
        className="flex bg-bgcolor min-h-screen w-full  flex-col items-center justify-between p-24"
        id="categories"
      >
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
      <main className="flex items-start bg-bgcolor min-h-screen w-full flex-wrap  justify-between p-24" id="categories">
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
          <button
            onClick={wordHandler}
            className="rounded-full text-center font-medium w-full p-2 bg-htnblack border-2 border-htnblack m-1 text-htnwhite mt-8"
          >
            Generate story
          </button>
        </div>
      </main>

      {/* Results */}
      <main className=" flex justify-between border-y-2 min-h-screen w-full">
        <div className="flex flex-col min-w-[22rem] text-4xl border-r-2 shadow-xl border-gray-200 px-6 my-4">
          <div className="mb-12">Logo</div>
          <h2>Title</h2>
          <button
            onClick={promptHandler}
            className="rounded-full text-center font-medium w-full p-2 bg-htnblack border-2 border-htnblack m-1 text-htnwhite mt-8"
          >
            Submit
          </button>
        </div>
        <div>{story}</div>
      </main>
    </main>
  );
}
