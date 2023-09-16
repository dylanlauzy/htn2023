"use client";
import React from "react";
import { useState } from "react";

const Selector = ({ name, selected, setSelected }) => {
  const [isSelected, setIsSelected] = useState(selected.has(name));

  const clickHandler = (e) => {
    if (selected.has(name)) {
      selected.delete(name);
    } else {
      selected.add(name);
    }
    setSelected(selected);
    setIsSelected(!isSelected);
  };

  return (
    <div>
      {
        <button
          onClick={clickHandler}
          className={`${
            name == "" ? "hidden" : "visible"
          } transition-all font-medium text-lg rounded-full border-2 border-htnblack 
      ${
        isSelected == true
          ? "bg-htnblack text-htnwhite"
          : "bg-htnwhite text-htnblack"
      } 
        p-2 px-4 hover:bg-htnblack hover:text-htnwhite transition-all duration-300 m-1`}
        >
          {name}
        </button>
      }
    </div>
  );
};

export default Selector;
