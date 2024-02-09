import { useState } from "react";
import { useForm } from "react-hook-form";
import SelectItem from "./selectItem";
import { IMusicSelectQuiz } from "./musicQuiz";

interface IShortInput {
  answer: string;
}

export default function ShortForm(quiz: IMusicSelectQuiz) {
  const { register, handleSubmit, watch } = useForm<IShortInput>();
  const [isAnswer, setIsAnswer] = useState<boolean | undefined>();

  const isValid = (data: IShortInput) => {
    setIsAnswer(data.answer.toLowerCase() === quiz.answer?.toLowerCase());
  };
  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(isValid)}>
          <input
            className="border border-b border-black "
            {...register("answer")}
          />

          <input type="submit" className="cursor-pointer" />
        </form>
      </div>
      {isAnswer !== undefined && (
        <div className="flex justify-center">
          {isAnswer === true ? "정답입니다!" : "틀렸습니다!"}
        </div>
      )}
    </>
  );
}
