"use client"
import TwoChoiceSelector from "../components/twoChoiceSelector"
import { useState } from "react"

//test

const SCROLLS = [
    "Vertical",
    "Horizontal",
]

const READ = [
    "Left to Right",
    "Right to Left"
]

export default function Home() {
    const [wordCount, setWordCount] = useState(300) 
    const [scrollPreference, setScrollPreference] = useState(SCROLLS[0])
    const [readPreference, setReadPreference] = useState(READ[0])


    const scrollSelection = (preference) => {
        setScrollPreference(preference)
    }

    const readSelection = (preference) => {
        setReadPreference(preference)
    }
    return (
        <main className="flex items-start bg-bgcolor min-h-screen w-full flex-wrap  justify-between p-24">
            <div className=" w-2/4 text-4xl flex flex-wrap font-semibold">
                Additional Details
                <p className="text-lg text-gray-500 mt-3 m:mt-10 font-medium">(This is optional)</p>
            </div>
            <div className="float-left w-2/4">
                <p className="text-[20px] my-3">
                    Word limit ({wordCount})
                </p>
                <input onChange={(e) => setWordCount(e.target.value)} className=" accent-htnblack  w-full" type="range" min="100" max="500" defaultValue={wordCount}></input>
                <p className="text-[20px] my-4">
                    Scrolling direction:
                </p>
                <TwoChoiceSelector pair={SCROLLS} preference={scrollSelection}></TwoChoiceSelector>
                <p className="text-[20px] my-4">
                    Reading from:
                </p>
                <TwoChoiceSelector pair={READ} preference={readSelection}></TwoChoiceSelector>
                <button className="rounded-full text-center font-medium w-full p-2 bg-htnblack border-2 border-htnblack m-1 text-htnwhite mt-8">
                    Generate story
                    </button>
            </div>
        </main>
    )
}