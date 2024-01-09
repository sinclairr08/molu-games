import { useState } from "react";
import short from "./api/short.json";
import { useForm } from "react-hook-form";

interface IShortInput {
  [key: string]: string;
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

  const isValid = (data: IShortInput) => {
    console.log(data);

    for (let i = 0; i < shortState.length; i++) {
      const submit = data[`answer${i}`];

      setShortState((prev) => [
        ...prev.slice(0, i),
        {
          ...prev[i],
          isAnswer: submit === prev[i].answer,
        },
        ...prev.slice(i + 1),
      ]);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex justify-center">
        <h1 className="text-xl text-sky-500">Blue Archive Quiz Site</h1>
      </div>
      <form onSubmit={handleSubmit(isValid)}>
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
              <input
                className="border border-b border-black "
                {...register(`answer${index}`)}
              />
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
        <div className="flex justify-center">
          <input type="submit" className="cursor-pointer" />
        </div>
      </form>
    </div>
  );
}

export default App;
