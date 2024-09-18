const LearnEvent = () => {

  const handleClick1 = (e) => {
    e.preventDefault();
    console.log("button clicked 1");
  };

  const handleClick2 = (personName, e) => {
    console.log(personName, e);

  };

  return (
    <>
      {/* Without Argument */}
      <button onClick={handleClick1}>Click 1</button>
      {/* With Argument */}
      <button onClick={(e) => handleClick2("Faizan Ansari", e)} >Click 2</button>
    </>
  );
};

export default LearnEvent;
