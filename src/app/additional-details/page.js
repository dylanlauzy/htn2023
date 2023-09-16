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
    const [scrollPreference, setScrollPreference] = useState(SCROLLS[0])
    const [readPreference, setReadPreference] = useState(READ[0])

    const scrollSelection = (preference) => {

    }

    const readSelection = () => {

    }
    return (
        <main className="flex bg-bgcolor min-h-screen w-full flex-col items-center justify-between p-24">
            <div className="float-left text-left w-2/4 text-4xl flex flex-wrap">
                Additional Details
            </div>
            <div className="float-left w-2/4">
                <p>
                    Word limit
                </p>
                <input type="text" className=" w-full p-2 m-1 border-2 rounded-full  border-htnblack border-md"></input>
                <p>
                    Scrolling direction:
                </p>
                <TwoChoiceSelector pair={SCROLLS} preference={scrollSelection}></TwoChoiceSelector>
                <p>
                    Reading from:
                </p>
                <TwoChoiceSelector pair={READ} preference={readSelection}></TwoChoiceSelector>
            </div>
        </main>
    )
}