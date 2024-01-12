import QuizGame from "./quizGame";

function Games() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex justify-center">
        <h1 className="text-xl text-sky-500">Molu Games</h1>
      </div>
      <QuizGame />
    </div>
  );
}

export default Games;
