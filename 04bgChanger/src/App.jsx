import { useState } from 'react';

function App() {
  const [color, setColor] = useState("purple");//state varible (changing over a time)

  return (
    <div
      className="  duration-200 relative"
      style={{ backgroundColor: color, height:"600px", width:"1300px"}} // 👈 Set height here
    >
      <h1 className="text-3xl font-bold p-4">Pick a background color</h1>

      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-2 rounded-full text-white font-semibold"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-2 rounded-full text-white font-semibold"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-2 rounded-full text-white font-semibold"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-2 rounded-full text-black font-semibold"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-2 rounded-full text-white font-semibold"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
           <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-2 rounded-full text-white font-semibold"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-2 rounded-full text-white font-semibold"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-2 rounded-full text-white font-semibold"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-2 rounded-full text-white font-semibold"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default App;