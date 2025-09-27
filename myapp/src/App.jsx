import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/quiz/:category" element={<Quiz></Quiz>}></Route>
        <Route path="/result" element={<Result></Result>}></Route>
      </Routes>
    </>
  );
}

export default App;
