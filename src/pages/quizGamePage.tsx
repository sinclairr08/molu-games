import { Link } from "react-router-dom";

export default function QuizGamePage() {
  return (
    <div className="pb-12">
      <Link to={"/quizs/music"}>
        <div className="flex justify-center mt-4">
          <button className="p-4 border-2 rounded-md border-gray-500">
            Music Quizs
          </button>
        </div>
      </Link>
    </div>
  );
}
