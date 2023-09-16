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

                <textarea id="message" rows="4" class="block flex p-2.5 float-right w-3/4 ml-10 h-max
                resize-y overflow-x-clip box-border text-sm text-gray-900 rounded-lg border border-gray-300 
                dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black rows-10 col-30 " 
                placeholder="A mystery/thriller manga that starts with a dark scene in Shibuya..."></textarea>


              <button class = "float-right w-3/4 mt-3 ml-10 p-2 rounded-full bg-htnblack text-htnwhite">
                Next
              </button>
              </div>   
          </div>    
          
        </main>
      )
    }

export default Home