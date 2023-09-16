import Selectors from "../components/selectors"


export default function Home() {
    return (
      <main className="bg-bgcolor min-h-screen flex-col items-center justify-between p-24">
        <div class="section">
            <div className="float-left text-left w-2/4 text-4xl">
                How would you describe your story?
                <p className="float-left text-left w-2/4 text-sm mt-10">
                  Select all that apply.
                </p>
              </div>
            <div className="float-left w-2/4 flex flex-wrap">
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
            </div>
        </div>
        
      </main>
    )
  }
  