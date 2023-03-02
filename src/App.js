import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<TodoContainer tableName={'Home'}/>} />
        <Route exact path="/work" element={<TodoContainer tableName={'Work'}/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
