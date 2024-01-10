import short from "./api/short.json";
import ShortQuiz from "./shortQuiz";

function App() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex justify-center">
        <h1 className="text-xl text-sky-500">Blue Archive Quiz Site</h1>
      </div>
      {short.map((shortQuiz) => (
        <ShortQuiz {...shortQuiz} />
      ))}
    </div>
  );
}

export default App;
