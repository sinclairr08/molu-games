import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizGame from "./quizGame";
import BoardGame from "./boardGame";
import Home from "./home";
import Header from "./header";

function Games() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quizs" element={<QuizGame />}></Route>
        <Route path="/boards" element={<BoardGame />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Games;
