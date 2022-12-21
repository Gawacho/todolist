import { useState } from "react";

const LikeButton = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev_count) => prev_count + 1);
  };
  return (
    <span
      className="likeButton   bg-red-200 text-white px-4 rounded-0.1xl cursor-pointer justify-center select-none"
      onClick={handleClick}
    >
      click here:{count}
    </span>
  );
};

export default LikeButton;
