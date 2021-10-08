import React from "react";
import { useHistory } from "react-router";

function Problem({ step, firstAnswer, secondAnswer }) {
  let history = useHistory();
  const seeResult = () => {
    history.push("/team");
  };
  let endFlag = 0;
  if (step >= 8) {
    endFlag = 1;
  }
  return (
    <div>
      <div>현재 step : {step}</div>
      <button onClick={endFlag ? seeResult : firstAnswer}>firstAnswer</button>
      <button onClick={endFlag ? seeResult : secondAnswer}>secondAnswer</button>
    </div>
  );
}

export default Problem;
