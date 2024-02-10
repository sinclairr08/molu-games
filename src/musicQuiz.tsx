import SelectForm from "./selectForm";
import ShortForm from "./shortForm";

export interface IMusicSelectQuiz {
  problemNo: number;
  problemType: string;
  question: string;
  musicPath: string;
  answer?: string;
  answerList?: string[];
  answerIndex?: number;
}

export default function MusicQuiz(quiz: IMusicSelectQuiz) {
  return (
    <div key={quiz.question} className="flex flex-col space-y-4 pb-12">
      <div className="flex justify-center">
        {quiz.problemNo}: {quiz.question}
      </div>

      {quiz.musicPath && (
        <div className="flex justify-center">
          <audio controls src={require(`/src/music/${quiz.musicPath}.mp3`)} />
        </div>
      )}

      {quiz.problemType == "select" ? (
        <SelectForm {...quiz} />
      ) : (
        <ShortForm {...quiz} />
      )}
    </div>
  );
}
