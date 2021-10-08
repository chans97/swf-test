import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home({ setStep, setPoint }) {
  useEffect(() => {
    setStep(1);
    setPoint(0);
  });
  return (
    <div>
      home
      <Link to="/problem">나와 어울리는 댄스 크루 찾으러 가기</Link>
    </div>
  );
}

export default Home;
