import React from "react";
import ChatBox from "./components/ChatBox";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="w-full h-full shadow-lg rounded-lg">
          <ChatBox />
        </div>
      </div>
    </>
  );
};

export default App;
