import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<TodoContainer />} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
