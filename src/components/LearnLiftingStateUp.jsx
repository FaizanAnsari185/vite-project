const LearnLiftingStateUp = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    let dt = "I am Child Data";
    let mt = "I am Child Data 2";
    props.myClick({ dt, mt });
  };
  return (
    <>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};

export default LearnLiftingStateUp;
