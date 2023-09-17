"use client"

import { useData } from "../components/ContextProvider";

const page = () => {
  let {data, setData} = useData()

  const promptHandler = () => {
    setPrompt(storyline + " " + "descriptiveWords");
  };

  return (
    <main className=" flex justify-between border-y-2 min-h-screen w-full">
      <div className="flex flex-col min-w-[22rem] border-r-2 shadow-xl border-gray-200 px-6 py-10">
        <div className="mb-16">Logo</div>
        <h2 className="text-4xl mb-6">Title</h2>
        <textarea
          type="textarea"
          className="border-inner border-[1.5px] border-black rounded-lg flex-grow shadow-inner px-2 py-3"
        ></textarea>
        <button
          onClick={promptHandler}
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
