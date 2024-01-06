import { useState } from "react";
import short from "./api/short.json";
import { useForm } from "react-hook-form";

interface IShortInput {
  answer: string;
}

function App() {
  const s0 = short[0];
  const [state, setState] = useState("");
  const { register, handleSubmit } = useForm<IShortInput>();
  const isValid = (data: IShortInput) => {
    if (data.answer == s0.answer) {
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
        <form onSubmit={handleSubmit(isValid)}>
          <input
            className="border border-b border-black "
            {...register("answer", { required: true })}
          />
          <input type="submit" className="cursor-pointer" />
        </form>
      </div>
      <div className="flex justify-center">{state}</div>
    </div>
  );
}

export default App;
