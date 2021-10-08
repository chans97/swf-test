import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Problem from "./Problem";
import Team from "./Team";

function App() {
  const [step, setStep] = useState(1);
  const [point, setPoint] = useState(0);
  const firstAnswer = () => {
    setPoint((prepoint) => prepoint + 1);
    setStep((preStep) => preStep + 1);
  };
  const secondAnswer = () => {
    setStep((preStep) => preStep + 1);
  };
  const teamList = [
    "LACHICA",
    "YGX",
    "WANT",
    "WAYB",
    "CocaNButter",
    "PROWDMON",
    "HolyBang",
    "HOOK",
  ];
  const teamName = teamList[point];

  return (
    <div>
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
        <Route exact path="/team" render={() => <Team teamName={teamName} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
