
export default function MusicQuiz() {
    const test = require("./music/000.mp3");
  return (
    <div className="flex justify-center">
    <div className="mt-4 border border-black border-4 p-4">
    <audio src={test} autoPlay/>
    </div>
    </div>
  );
}
