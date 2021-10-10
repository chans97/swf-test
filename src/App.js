import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Judge from "./Judge";
import Problem from "./Problem";
import Team from "./Team";

function App() {
  const [step, setStep] = useState(1);
  const [point, setPoint] = useState(0);
  const firstAnswer = () => {
    setStep((preStep) => preStep + 1);
  };
  const secondAnswer = () => {
    setPoint((prepoint) => prepoint + 1);
    setStep((preStep) => preStep + 1);
  };
  const teamList = [
    "LACHICA",
    "YGX",
    "WANT",
    "WAYB",
    "COCANBUTTER",
    "PROWDMON",
    "HOLYBANG",
    "HOOK",
  ];
  const teamName = teamList[point];

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={() => <Home setStep={setStep} setPoint={setPoint} />}
        />
        <Route
          exact
          path="/problem"
          render={() => (
            <Problem
              step={step}
              firstAnswer={firstAnswer}
              secondAnswer={secondAnswer}
            />
          )}
        />
        <Route
          exact
          path="/judge"
          render={() => <Judge teamName={teamName} />}
        />
        <Route exact path="/team" render={() => <Team teamName={teamName} />} />
      </BrowserRouter>
    </>
  );
}

export default App;
