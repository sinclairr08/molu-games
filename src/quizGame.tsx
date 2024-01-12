import short from "./api/short.json";
import select from "./api/select.json";

import ShortQuiz from "./shortQuiz";
import SelectQuiz from "./selectQuiz";

export default function QuizGame() {
  return (
    <div className="pb-12">
      {short.map((shortQuiz) => (
        <ShortQuiz key={shortQuiz.question} {...shortQuiz} />
      ))}
      {select.map((selectQuiz) => (
        <SelectQuiz key={selectQuiz.question} {...selectQuiz} />
      ))}
    </div>
  );
}
