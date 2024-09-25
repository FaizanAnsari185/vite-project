import { useState } from "react";

const LearnConditionalRendring = () => {
  const status = true;
  const titus = false;

  const [show, setShow] = useState(false);
  return (
    <>
      {/* Ternary Oprator */}
      {status && <h1>This Will Show On The Screen</h1>}
      {titus && <h1>This Will Not Show On The Screen</h1>}

      {show ? (
        <>
          <h1>Also This is Show On Screen But When You Click It&apos;s Change</h1>
        </>
      ) : (
        <>
          <h1>This is Show On Screen But When You Click It&apos;s Change</h1>
        </>
      )}
      <button onClick={() => setShow(!show)}>Click This Button To Change Text</button>
    </>
  );
};

export default LearnConditionalRendring;
