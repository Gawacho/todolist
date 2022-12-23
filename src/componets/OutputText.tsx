import { useState } from "react";

const OutputText = () => {
  const [text, setText] = useState("");
  return (
    <div className="App ">
      {/* ↓value属性にstate変数「text」を指定 */}
      <input
        value={text}
        className="border-2 border-black"
        onChange={(event) => setText(event.target.value)}
      />

      {/* ↓state変数「text」を表示する */}
      <p className="text-3xl">{text}</p>
    </div>
  );
};

export default OutputText;
