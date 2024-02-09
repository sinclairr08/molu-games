import { useState } from "react";
import { useForm } from "react-hook-form";
import SelectItem from "./selectItem";
import { IMusicSelectQuiz } from "./musicQuiz";

interface ISelectInput {
  answerIndex: number;
}

export default function SelectForm(quiz: IMusicSelectQuiz) {
  const { register, handleSubmit, watch } = useForm<ISelectInput>();
  const [isAnswer, setIsAnswer] = useState<boolean | undefined>();

  const isValid = (data: ISelectInput) => {
    // 왜 === 일 때 안 되는지
    setIsAnswer(data.answerIndex == quiz.answerIndex);
  };
  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(isValid)}>
          <div className="flex flex-col">
            {quiz.answerList &&
              quiz.answerList.map((answerItem, i) => (
                <SelectItem
                  key={i}
                  register={register}
                  index={i}
                  answerItem={answerItem}
                  isCurrentClicked={watch("answerIndex") == i + 1}
                />
              ))}

            <input type="submit" className="cursor-pointer" />
          </div>
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
