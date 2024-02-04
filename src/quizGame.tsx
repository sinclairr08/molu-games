import short from "./api/short.json";
import select from "./api/select.json";
import music from "./api/music.json";

import ShortQuiz from "./shortQuiz";
import SelectQuiz from "./selectQuiz";
import MusicQuiz from "./musicQuiz";

export default function QuizGame() {
  return (
    <div className="pb-12">
      {/* {short.map((shortQuiz) => (
        <ShortQuiz key={shortQuiz.question} {...shortQuiz} />
      ))}
      {select.map((selectQuiz) => (
        <SelectQuiz key={selectQuiz.question} {...selectQuiz} />
      ))} */}

      <MusicQuiz {...music[0]} />
    </div>
  );
}
