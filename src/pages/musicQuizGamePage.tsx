import music from "../api/music.json";
import MusicQuiz from "../musicQuiz";

export default function MusicQuizGamePage() {
  return (
    <div className="pb-12 mt-4">
      {music.map((musicQuiz) => (
        <MusicQuiz key={musicQuiz.problemNo} {...musicQuiz} />
      ))}
    </div>
  );
}
