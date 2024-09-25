import useCustomCounter from "../hooks/useCustomCounter";

const LearnCustomHook = () => {
  const { count, handleIncrement } = useCustomCounter();
  return (
    <>
      <h1>Custom Hook Counter, You Click {count} Times</h1>
      <button onClick={handleIncrement}>increment + 1</button>
    </>
  );
};

export default LearnCustomHook;
