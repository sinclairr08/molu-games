import short from "./api/short.json";
import select from "./api/select.json";
import music from "./api/music.json";

import ShortQuiz from "./shortQuiz";
import SelectQuiz from "./selectQuiz";
import MusicQuiz from "./musicQuiz";
import { Link } from "react-router-dom";

export default function QuizGame() {
  return (
    <div className="pb-12">
      {/* {short.map((shortQuiz) => (
        <ShortQuiz key={shortQuiz.question} {...shortQuiz} />
      ))}
      {select.map((selectQuiz) => (
        <SelectQuiz key={selectQuiz.question} {...selectQuiz} />
      ))} */}

      <Link to={"/quizs/music"}>
        <div className="flex justify-center mt-4">
          <button className="p-4 border-2 rounded-md border-gray-500">
            Music Quizs
          </button>
        </div>
      </Link>

      {/* <MusicQuiz {...music[0]} />  */}
    </div>
  );
}
