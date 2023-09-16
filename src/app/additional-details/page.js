"use client"
import TwoChoiceSelector from "../components/twoChoiceSelector"
import { useState } from "react"


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
            <div className=" w-2/4 text-4xl flex flex-wrap">
                Additional Details
                <p className="text-xl">(This is optional)</p>
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
            </div>
        </main>
    )
}