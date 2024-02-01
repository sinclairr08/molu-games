import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex justify-center">
        <Link to={"/"}>
          <h1 className="text-xl text-sky-500">Molu Games</h1>
        </Link>
      </div>

      <div className="flex space-x-6 text-lg text-sky-500">
        <Link to={"/quizs"}>Quizs</Link>
        <Link to={"/boards"}>Board</Link>
      </div>
    </div>
  );
}
