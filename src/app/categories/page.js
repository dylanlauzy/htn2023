import StoryBuilder from "../components/StoryBuilder"

export default function Home() {


    return (
      <main className="flex bg-bgcolor min-h-screen w-full h-full flex-col items-center justify-between px-5 md:p-24">
        <div className="m-auto flex flex-col md:flex-row">
            <div className="md:w-2/4 text-4xl flex flex-col pr-6 font-semibold pb-4 m:pb-0">
                How would you describe your story?
                <p className="text-left text-gray-500 text-lg mt-3 m:mt-10 font-medium">Select at least three words.</p>
              </div>
            <div className="float-left md:w-2/4 ">
              <StoryBuilder></StoryBuilder>
            </div>
        </div>
        
      </main>
    )
  }
  