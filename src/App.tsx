import { useState } from "react";
import short from "./api/short.json";

function App() {
  const s0 = short[0];
  const [state, setState] = useState("");

  //@ts-ignore
  const isValid = (e) => {
    e.preventDefault();
    if (e.target[0].value == s0.answer) {
      setState("성공!");
    } else {
      setState("땡!");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex justify-center">
        <h1 className="text-xl text-sky-500">Blue Archive Quiz Site</h1>
      </div>
      <div className="flex justify-center">
        {s0.problemNo}: {s0.question}
      </div>
      <div className="flex justify-center">
        <img src={require(`/src/imgs/${s0.imgPath}.png`)} />
      </div>
      <div className="flex justify-center">
        <form onSubmit={isValid}>
          <input type="text" className="border border-b border-black " />
          <input type="submit" className="cursor-pointer" />
        </form>
      </div>
      <div className="flex justify-center">{state}</div>
    </div>
  );
}

export default App;
