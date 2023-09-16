"use client";
import React from "react";
import Selector from "./selector";
import { useState } from "react";

//Transition to Set
const THEMES = [
  "Thriller",
  "Mystery",
  "80s Japan",
  "Romance",
  "Slice of Life",
  "Horror",
  "Mecha",
  "Comedy",
  "Graphic Novel",
  "Manga",
  "Black and White",
  "Action",
  "Women empowerment",
  "Children",
  "Dogs",
  "Sea animals",
  "Interactive",
  "Adventure"
]

const StoryBuilder = ({descriptiveWords}) => {  
  let [list, setList] = useState(THEMES)
  const [selected, setSelected] = useState(new Set([]));
  const [subject, setSubject] = useState("");

  const keyPress = (e) => {
    if (e.key == "Enter" && subject != "") {
      setList((prevList) => [subject, ...prevList])
      setSubject("")
      e.target.value = ""
    }
  }

  const clickHandler = () => {
    descriptiveWords(selected)
    console.log(selected)
  }



  return (
    <>
      <input
        type="text"
        placeholder="Add descriptors"
        onChange={(e) => setSubject(e.target.value)}
        onKeyDown={(e) => keyPress(e)}
        className="w-full p-2 px-4 m-1 border-2 rounded-full  border-htnblack border-md"
      />
      <div>
        
        <div className="flex flex-wrap">
          {list.map((item, key) => {
            return (
              <Selector
                key={key}
                name={item}
                selected={selected}
                setSelected={setSelected}
              ></Selector>
            );
          })}
        </div>
        <button onClick={clickHandler} className="rounded-full text-center font-medium w-full p-2 bg-htnblack border-2 border-htnblack m-1 text-htnwhite mt-8">
          Next
        </button>
      </div>
    </>
  );
};

export default StoryBuilder
