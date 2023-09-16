import Selectors from "../components/selectors"

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
                <p className="float-left text-left w-2/4 text-sm mt-10">
                  Select all that apply.
                </p>
              </div>
            <div className="float-left w-2/4 ">
              <input type="text" className=" w-full p-2 m-1 border-2 rounded-full  border-htnblack border-md"></input>
              <Selectors list={THEMES}></Selectors>
              <button className="rounded-full w-full p-2 bg-htnblack border-2 border-htnblack m-1 text-htnwhite mt-8">
                Next

              </button>
            </div>
        </div>
        
      </main>
    )
  }
  