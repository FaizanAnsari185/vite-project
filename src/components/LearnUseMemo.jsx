import { useState } from "react";

const LearnUseMemo = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  const [randomNumber, setRandomNumber] = useState(null);
  const genrateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newRandomNumber);
  };

  return (
    <>
      <h1>you click {count} times</h1>
      <button onClick={handleClick}>click me</button>

      <h1>Random Number {randomNumber}</h1>
      <button onClick={genrateRandomNumber}>Genrate Random Number</button>
    </>
  );
};

export default LearnUseMemo;
