import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import Chat from "./src/pages/Chat";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
