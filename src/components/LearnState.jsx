import { useState } from "react";

const LearnState = () => {
  const [plus, setPlus] = useState(0);
  const [count, setCount] = useState(0);
  const [object, setObject] = useState({ x: 1, y: 2 });

  const handleClick = () => {
    setPlus(plus + 1);
  };

  const minusClick = () => {
    setPlus(plus - 1);
  };

  const resateClick = () => {
    setPlus(0);
  };

  const changeObject = () => {
    setObject({ x: 1, y: 2 });
    console.log(object)
  };

  return (
    <>
      <h1>you click {plus} time</h1>
      <button onClick={handleClick}>click me + 1 (by function)</button>
      <button onClick={minusClick}>click me - 1 (by function)</button>
      <button onClick={resateClick}>Resate Button (by function)</button>

      <h1>you click {count} times ok</h1>
      <button onClick={() => setCount(count + 1)}>
        click me + 1 (by ternary operator)
      </button>
      <button onClick={() => setCount(count - 1)}>
        click me - 1 (by ternary operator)
      </button>
      <button onClick={() => setCount(0)}>
        Resate Button (by ternary operator)
      </button>

      <h1>Object show in console</h1>
      <button onClick={changeObject}>
        click me to show object in console
      </button>

    </>
  );
};

export default LearnState;
