"use client"
import StoryBuilder from "../components/StoryBuilder"
import { useState } from "react"

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
  "Adventure"
]

export default function Home() {


    return (
      <main className=" flex bg-bgcolor min-h-screen w-full  flex-col items-center justify-between p-24">
        <div>
            <div className="float-left text-left w-2/4 text-4xl flex flex-wrap">
                How would you describe your story?
                <p className="float-left stext-left w-2/4 text-sm mt-10">
                  Select all that apply.
                </p>
              </div>
            <div className="float-left w-2/4 ">
              <StoryBuilder list={THEMES}></StoryBuilder>
            </div>
        </div>
        
      </main>
    )
  }
  