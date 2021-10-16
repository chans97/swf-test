import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Judge from "./Judge";
import Nopage from "./Nopage";
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
    "WANT",
    "WAYB",
    "LACHICA",
    "HOOK",
    "YGX",
    "COCANBUTTER",
    "HOLYBANG",
    "PROWDMON",
  ];
  useEffect(() => {
    const image = new Image();
    image.src = "card_JUDGE.png";
    teamList.forEach((teamName) => {
      const image = new Image();
      image.src = "logo_" + teamName + ".png";
    });
  });
  const teamName = teamList[point];

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
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
          <Route
            exact
            path="/team"
            render={() => <Team teamName={teamName} />}
          />
          <Route path="/team" render={() => <Team teamName={teamName} />} />
          <Route path="*">
            <Nopage></Nopage>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
