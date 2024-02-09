import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizGamePage from "./pages/quizGamePage";
import BoardGamePage from "./pages/boardGamePage";
import HomePage from "./pages/homePage";
import Header from "./components/header";
import MusicQuizPage from "./pages/musicQuizGamePage";

function Games() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/quizs/music" element={<MusicQuizPage />}></Route>
        <Route path="/quizs" element={<QuizGamePage />}></Route>
        <Route path="/boards" element={<BoardGamePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Games;
