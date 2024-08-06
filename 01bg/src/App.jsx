import { useState } from "react"

function App() {

  const [color, setColor] = useState("white")
  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center 
 bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap 
      justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "red" }}
          >Red</button>
          <button onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "Green" }}
          >Green</button>
          <button onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "black" }}
          >black</button>
          <button onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "Blue" }}
          >Blue</button>
          <button onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "yellow" }}
          >Yellow</button>
          <button onClick={() => setColor("Gray")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "gray" }}
          >Gray</button>
          <button onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "orange" }}
          >orange</button>
          <button onClick={() => setColor("brown")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "brown" }}
          >Brown</button>
          <button onClick={() => setColor("navy")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "navy" }}
          >Navy</button>
          <button onClick={() => setColor("aqua")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "aqua" }}
          >Aqua</button>
          <button onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "olive" }}
          >olive</button>
          <button onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "pink" }}
          >Pink</button>


        </div>
      </div>
    </div>

  )
}

export default App
