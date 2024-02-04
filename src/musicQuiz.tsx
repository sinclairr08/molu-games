import { useState } from "react";
import { useForm } from "react-hook-form";

interface ISelectInput {
  answerIndex: number;
}

export interface IMusicSelectQuiz {
  problemNo?: number;
  question: string;
  musicPath: string;
  answerList: string[];
  answerIndex: number;
}

export default function MusicQuiz(quiz: IMusicSelectQuiz) {
  const { register, handleSubmit } = useForm<ISelectInput>();
  const [isAnswer, setIsAnswer] = useState<boolean | undefined>();

  const isValid = (data: ISelectInput) => {
    console.log(data);
    // 왜 === 일 때 안 되는지
    setIsAnswer(data.answerIndex == quiz.answerIndex);
  };

  return (
    <div key={quiz.question} className="pb-12">
      <div className="flex justify-center">
        객관식 {quiz.problemNo}: {quiz.question}
      </div>

      {quiz.musicPath && (
        <div className="flex justify-center">
          <audio controls src={require(`/src/music/${quiz.musicPath}.mp3`)} />
        </div>
      )}

      <div className="flex justify-center">
        <form onSubmit={handleSubmit(isValid)}>
          <div className="flex flex-col">
            {quiz.answerList.map((answerItem, i) => (
              <label key={i}>
                {i + 1}
                <input
                  type="radio"
                  className="sr-only"
                  value={i + 1}
                  {...register("answerIndex")}
                />
                {answerItem}
              </label>
            ))}

            <input type="submit" className="cursor-pointer" />
          </div>
        </form>
      </div>
      {isAnswer !== undefined ? (
        <div className="flex justify-center">
          {isAnswer === true ? "정답입니다!" : "틀렸습니다!"}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
