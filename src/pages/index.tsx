import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header flex w-full flex-1 flex-col items-center justify-center   px-20 text-center">
        <h1 className="text-6xl font-bold">ToDolist</h1>
        <LikeButton />
      </header>
    </div>
  );
}

function LikeButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev_count) => prev_count + 1);
  };
  return (
    <span
      className="likeButton   bg-red-200 text-white px-4 rounded-0.1xl cursor-pointer justify-center "
      onClick={handleClick}
    >
      {count}
    </span>
  );
}

export default App;
