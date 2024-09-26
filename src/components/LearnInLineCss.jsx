const LearnInLineCss = () => {
    const btnStyle = {
        color: 'red',
        backgroundColor: 'yellow'
    }
  return (
    <>
      {/* IN LINE CSS */}
      <p style={{ fontSize: "50px", color: "blue" }}>Learn React With Vite</p>
      <button style={btnStyle}>Button1</button>
      <button style={{...btnStyle,...{fontSize: "50px"}}}>Button2</button>
    </>
  );
};

export default LearnInLineCss;
