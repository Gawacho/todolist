import React, { useState } from "react";
import LikeButton from "../componets/LikeButton";
import OutputText from "../componets/OutputText";

function App() {
  return (
    <div className="App">
      <header className="App-header flex w-full flex-1 flex-col items-center justify-center   px-20 text-center">
        <h1 className="text-6xl font-bold">ToDolist</h1>
        {/* <LikeButton /> */}
        <OutputText />
      </header>
    </div>
  );
}

export default App;
