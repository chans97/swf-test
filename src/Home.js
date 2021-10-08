import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Home({ setStep, setPoint }) {
  useEffect(() => {
    setStep(1);
    setPoint(0);
  });
  return (
    <Homemain>
      home
      <Link to="/problem">나와 어울리는 댄스 크루 찾으러 가기</Link>
    </Homemain>
  );
}

const Homemain = styled.div`
  background-image: url(main_background.png);
  width: 100%;
  height: 177.77vw;
  background-size: contain;
  @media (min-width: 480px) {
    height: 853px;
  }
`;

export default Home;
