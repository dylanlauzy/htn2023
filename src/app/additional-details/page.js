import Selectors from "../components/selectors"

const SCROLLS =[
    "Vertical",
    "Horizontal"
]

const READ = [
    "Left to Right",
    "Right to Left"
]

export default function Home() {
    return (
        <main className="flex bg-bgcolor min-h-screen w-full flex-col items-center justify-between p-24">
            <div className="float-left text-left w-2/4 text-4xl flex flex-wrap">
                Additional Details
            </div>
            <div className="float-left w-2/4">
                <p>
                    Word limit
                </p>
                <input type="text" className=" w-full p-2 m-1 border-2 rounded-full  border-htnblack border-md"></input>
                <p>
                    Scrolling direction:
                </p>
                <Selectors list={SCROLLS}></Selectors>
                <p>
                    Reading from:
                </p>
                <Selectors list={READ}></Selectors>
            </div>
        </main>
    )
}