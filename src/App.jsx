import { LearnComponent } from "./components/LearnComponent";
import LearnEvent from "./components/LearnEvent";
import LearnJSX from "./components/LearnJSX";
import LearnLiftingStateUp from "./components/LearnLiftingStateUp";
import LearnProps from "./components/LearnProps";

function App() {
  let roll = 101
  return (
    <>
      {/* <LearnComponent />
      <LearnJSX />
      <LearnProps myName="Mohammad Faizan Ansari" roll={roll}/>
      <LearnEvent /> */}
      <LearnLiftingStateUp />

    </>
  );
}

export default App;
