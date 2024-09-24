import useCustomCounter from "../hooks/useCustomCounter";

const LearnCustomHook = () => {
  const { count, handleIncrement } = useCustomCounter();
  return (
    <>
      <h1>custom hook counter, you click {count} times</h1>
      <button onClick={handleIncrement}>increment + 1</button>
    </>
  );
};

export default LearnCustomHook;
