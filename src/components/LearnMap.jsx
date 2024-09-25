const LearnMap = () => {
  const pakage = ["pakage1", "pakage2", "pakage3"];
  return (
    <>
      <ol>
        {pakage.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    </>
  );
};

export default LearnMap;
