import React from 'react'

const Home = () => {
    return (
        <main className= "flex min-h-screen w-full flex-row items-center justify-between p-40"
        // "flex min-h-screen w-full flex-row items-center justify-between p-24"
        >
          <div>
              <div className="float-left text-left w-2/4 text-4xl flex flex-wrap font-semibold">
                Start writing or share your own storyline
                </div>
                
                <div className ="float-right w-2/4 flex flex-wrap"> 

                <textarea id="message" rows="4" class="block flex p-2.5 float-right w-3/4 ml-10
                text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                placeholder="A mystery/thriller manga that starts with a dark scene in Shibuya..."></textarea>
                // test

              <button class = "float-right w-3/4 mt-3 ml-10 p-2 rounded-full bg-htnblack text-htnwhite">
                Next
              </button>
              </div>   
          </div>    
          
        </main>
      )
    }

export default Home