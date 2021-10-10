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
      <Link to="/problem">
        <Btn>
          <BtnSpan>나와 어울리는</BtnSpan>
          <BtnSpan>댄스 크루 찾으러 가기</BtnSpan>
        </Btn>
        <CountSpan>
          <BoldNumber>2021</BoldNumber>명의 댄서들이 참여했습니다.
        </CountSpan>
      </Link>
      <Footer>
        <span>©Chan&Blanky</span>
        <span>Develop by | dpdpdpfl@google.com</span>
        <span>Design by |Dskdksk@google.com</span>
      </Footer>
    </Homemain>
  );
}

const Homemain = styled.div`
  background-image: url(main_background.png);
  width: 100%;
  height: 177.9vw;
  background-size: contain;
  @media (min-width: 400px) {
    height: 711px;
  }
  display: flex;
  justify-content: center;
`;

const Btn = styled.div`
  width: 240px;
  height: 70px;
  margin-top: 390px;
  border: 1px solid #a3b0ff;
  box-sizing: border-box;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 480px) {
  }
`;

const BtnSpan = styled.span`
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  color: #a3b0ff;
`;

const CountSpan = styled.span`
  margin-top: 20px;
  font-style: normal;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #a3b0ff;
`;

const BoldNumber = styled.span`
  font-weight: bold;
  margin-right: 4px;
`;

const Footer = styled.div`
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 300;
  font-size: 8px;
  line-height: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

export default Home;
