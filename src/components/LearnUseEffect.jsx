import { useEffect, useState } from "react";

const LearnUseEffect = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  const [randomNumber, setRandomNumber] = useState(null);
  const genrateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newRandomNumber);
  };

  useEffect(() => {
    //server se connection banane ka code yaha likhte he
    console.log("useEffect hook called");
    return () => {
    //server se connection ka code disconect karne ke liye yaha likhte he
      console.log("component will unmount !!");
    }
  }, [count]);


    return (
    <>
      <h1>Count {count}</h1>
      <button onClick={handleClick}>Click me +1</button>
      <hr />
      <h1>Random Number {randomNumber}</h1>
      <button onClick={genrateRandomNumber}>Genrate Random Number</button>
    </>
  );
};

export default LearnUseEffect;
