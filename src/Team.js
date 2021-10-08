import React from "react";
import { useHistory } from "react-router";

function Team({ teamName }) {
  let history = useHistory();
  const goHome = () => {
    history.push("/");
  };
  return (
    <div>
      <div>현재 team : {teamName}</div>
      <button onClick={goHome}>다시 춤추러가기</button>
    </div>
  );
}

export default Team;
