import short from "./api/short.json";
import select from "./api/select.json";

import ShortQuiz from "./shortQuiz";
import SelectQuiz from "./selectQuiz";

function App() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex justify-center">
        <h1 className="text-xl text-sky-500">Blue Archive Quiz Site</h1>
      </div>
      {short.map((shortQuiz) => (
        <ShortQuiz key={shortQuiz.question} {...shortQuiz} />
      ))}
      {select.map((selectQuiz) => (
        <SelectQuiz key={selectQuiz.question} {...selectQuiz} />
      ))}
    </div>
  );
}

export default App;
