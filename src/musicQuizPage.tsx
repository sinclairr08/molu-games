import short from "./api/short.json";
import select from "./api/select.json";
import music from "./api/music.json";

import ShortQuiz from "./shortQuiz";
import SelectQuiz from "./selectQuiz";
import MusicQuiz from "./musicQuiz";
import { Link } from "react-router-dom";

export default function MusicQuizPage() {
  return (
    <div className="pb-12 mt-4">
      {music.map((musicQuiz) => (
        <MusicQuiz key={musicQuiz.problemNo} {...musicQuiz} />
      ))}
    </div>
  );
}
