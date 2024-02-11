import AudioItem from "./components/audioItem";
import SelectForm from "./selectForm";
import SelectMusicForm from "./selectMusicForm";
import ShortForm from "./shortForm";

export interface IMusicSelectQuiz {
  problemNo: number;
  problemType: string;
  question: string;
  musicPath?: string;
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

      {quiz.musicPath && <AudioItem path={quiz.musicPath} />}

      {quiz.problemType == "select" ? (
        <SelectForm {...quiz} />
      ) : quiz.problemType == "musicSelect" ? (
        <SelectMusicForm {...quiz} />
      ) : (
        <ShortForm {...quiz} />
      )}
    </div>
  );
}
