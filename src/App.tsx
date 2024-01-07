import { useState } from "react";
import short from "./api/short.json";
import { useForm } from "react-hook-form";

interface IShortInput {
  answer: string;
}

interface IShortQuestion {
  problemNo: number;
  question: string;
  imgPath?: string;
  answer: string;
  isAnswer?: boolean;
}

function App() {
  const [shortState, setShortState] = useState<IShortQuestion[]>(short);
  const { register, handleSubmit, resetField } = useForm<IShortInput>();

  const isValid = (data: IShortInput, index: number) => {
    setShortState((prev) => [
      ...prev.slice(0, index),
      {
        ...prev[index],
        isAnswer: data.answer == prev[index].answer,
      },
      ...prev.slice(index + 1),
    ]);
    console.log(shortState);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex justify-center">
        <h1 className="text-xl text-sky-500">Blue Archive Quiz Site</h1>
      </div>
      {shortState.map((shortQuestion, index) => (
        <div key={shortQuestion.question}>
          <div className="flex justify-center">
            {shortQuestion.problemNo}: {shortQuestion.question}
          </div>
          {shortQuestion.imgPath && (
            <div className="flex justify-center">
              <img src={require(`/src/imgs/${shortQuestion.imgPath}.png`)} />
            </div>
          )}
          <div className="flex justify-center">
            <form onSubmit={handleSubmit((data) => isValid(data, index))}>
              <input
                className="border border-b border-black "
                key={index}
                {...register("answer")}
              />
              <input type="submit" className="cursor-pointer" />
            </form>
          </div>
          {shortQuestion.isAnswer != undefined ? (
            <div className="flex justify-center">
              {shortQuestion.isAnswer == true ? "성공" : "땡"}
            </div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
