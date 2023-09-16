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
      <main className="bg-bgcolor min-h-screen flex-col items-center justify-between p-24">
        <div>
            <div className="float-left text-left w-2/4 text-4xl">
                How would you describe your story?
                <p className="float-left text-left w-2/4 text-sm mt-10">
                  Select all that apply.
                </p>
              </div>
<<<<<<< HEAD
            <div className="float-left w-2/4 flex flex-wrap">
              <div className="rounded-full border-2 border-htnblack w-1/4 p-2">

              </div>
              <Selectors name="Thriller"></Selectors>
              <Selectors name="Mystery"></Selectors>
              <Selectors name="Shōjo"></Selectors>
              <Selectors name="Romance"></Selectors>
              <Selectors name="Slice of Life"></Selectors>
              <Selectors name="Horror"></Selectors>
              <Selectors name="Mecha"></Selectors>
              <Selectors name="Comedy"></Selectors>
              <Selectors name="Josei"></Selectors>
              <Selectors name="Shonen"></Selectors>
              <Selectors name="Kodomo"></Selectors>
              <Selectors name="Yaoi"></Selectors>
              <Selectors name="Jujutsu Kaisen"></Selectors>
              <Selectors name="Gegika"></Selectors>
              <Selectors name="Harem"></Selectors>
              <Selectors name="Kodomomuke"></Selectors>
              <Selectors name="Seinen"></Selectors>
              <Selectors name="Adventure"></Selectors>
=======
            <div className="float-left w-2/4 ">
              <Selectors list={THEMES}></Selectors>
>>>>>>> f54958d37aa93817d9251f94035524af56e480c4
            </div>
        </div>
        
      </main>
    )
  }
  