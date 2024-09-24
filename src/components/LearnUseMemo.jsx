import { useMemo, useState } from "react";

const LearnUseMemo = () => {
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);


  function handleClick() {
    setCount(count + 1);
  };

  const genrateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newRandomNumber);
  };

  // const isCountTen = () => {
  //   console.log(5 + 6);
  //   if(count === 5){
  //     return "YES"
  //   }
  //   return "NO"
  // };


  //useMemo Unnesasory Calculation Ko Rokta He
  const isCountTen = useMemo(() => {
    console.log(18 + 2);
    if(count === 5){
      return "YES"
    }
    return "NO"
  },[count]);


  return (
    <>
      <h1>you click {count} times {isCountTen}</h1>
      <button onClick={handleClick}>click me</button>
      
      <h1>Random Number-- ({randomNumber})</h1>
      <button onClick={genrateRandomNumber}>Genrate Random Number</button>
    </>
  );
};

export default LearnUseMemo;
