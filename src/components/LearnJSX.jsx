const LearnJSX = () => {
  let model = "AQ4501";
  return (
    <>
      <h1>LearnJSX 1</h1>
      <h1>LearnJSX 2</h1>

      {/* JavaScript Expression in JSX */}
      <h1>Price: {10 + 20}</h1>
      <h1>Micromax - {model}</h1>

      {/* Attribute in JSX */}
      <h1 className="bg-primary">LearnJSX 3</h1>
      <h1 className={model}>LearnJSX 4</h1>
    </>
  );
};

export default LearnJSX;
