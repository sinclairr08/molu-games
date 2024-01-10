import { useState } from "react";
import { useForm } from "react-hook-form";

export interface IShortQuiz {
  problemNo: number;
  question: string;
  imgPath?: string;
  answer: string;
}

interface IShortInput {
  answer: string;
}

export default function ShortQuiz(quiz: IShortQuiz) {
  const { register, handleSubmit } = useForm<IShortInput>();
  const [isAnswer, setIsAnswer] = useState<boolean | undefined>();

  const isValid = (data: IShortInput) => {
    setIsAnswer(data.answer === quiz.answer);
  };
  return (
    <div key={quiz.question}>
      <div className="flex justify-center">
        단답형 {quiz.problemNo}: {quiz.question}
      </div>
      {quiz.imgPath && (
        <div className="flex justify-center">
          <img src={require(`/src/imgs/${quiz.imgPath}.png`)} />
        </div>
      )}
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(isValid)}>
          <input
            className="border border-b border-black "
            {...register("answer")}
          />
          <input type="submit" className="cursor-pointer" />
        </form>
      </div>
      {isAnswer != undefined ? (
        <div className="flex justify-center">
          {isAnswer == true ? "성공" : "땡"}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
