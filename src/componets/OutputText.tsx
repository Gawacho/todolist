import { useState } from "react";

const OutputText = () => {
  const [text, setText] = useState("");
  const [ToDos, setToDo] = useState<string[]>([]);

  const handleClick = () => {
    console.log("pressbutton");
    setToDo((Prev_ToDos) => [...Prev_ToDos, text]);
    setText("");
  };
  return (
    <div className="App ">
      {/* ↓value属性にstate変数「text」を指定 */}
      <div className="inline">
        <input
          value={text}
          className="border-2 border-black"
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit" className="border-2" onClick={handleClick}>
          追加
        </button>
      </div>

      <ul>
        {ToDos.map((ToDo) => {
          return <li>{ToDo}</li>;
        })}
      </ul>
    </div>
  );
};

export default OutputText;
