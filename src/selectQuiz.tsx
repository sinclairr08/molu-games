import { useState } from "react";
import { useForm } from "react-hook-form";

export interface ISelectQuiz {
  problemNo: number;
  question: string;
  imgPath?: string;
  answerList: string[];
  answerIndex: number;
}

interface ISelectInput {
  answerIndex: number;
}

export default function SelectQuiz(quiz: ISelectQuiz) {
  const { register, handleSubmit } = useForm<ISelectInput>();
  const [isAnswer, setIsAnswer] = useState<boolean | undefined>();

  const isValid = (data: ISelectInput) => {
    // 왜 === 일 때 안 되는지
    setIsAnswer(data.answerIndex == quiz.answerIndex);
  };
  return (
    <div key={quiz.question} className="pb-12">
      <div className="flex justify-center">
        객관식 {quiz.problemNo}: {quiz.question}
      </div>
      {quiz.imgPath && (
        <div className="flex justify-center">
          <img src={require(`/src/imgs/${quiz.imgPath}.png`)} />
        </div>
      )}
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(isValid)}>
          <select
            className="border border-b border-black "
            {...register("answerIndex")}
          >
            {quiz.answerList.map((answerItem, i) => (
              <option value={i + 1} key={i}>
                {answerItem}
              </option>
            ))}
          </select>
          <input type="submit" className="cursor-pointer" />
        </form>
      </div>
      {isAnswer !== undefined ? (
        <div className="flex justify-center">
          {isAnswer === true ? "성공" : "땡"}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
