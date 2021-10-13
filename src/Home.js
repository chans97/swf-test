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
      </Link>
      <img
        src="https://hitwebcounter.com/counter/counter.php?page=7881174&style=0025&nbdigits=7&type=page&initCount=0"
        border="0"
        alt="2021명의 댄서"
      />
      <CountSpan>명의 댄서들이 참여했습니다.</CountSpan>

      <Footer>
        <span>©Chan&Blanky</span>
        <span>Develop by | chansoo920@gmail.com</span>
        <span>Design by | sbleeyouk@gmail.com</span>
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
  flex-direction: column;
  align-items: center;
`;

const Btn = styled.div`
  width: 240px;
  height: 70px;
  margin-top: 390px;
  margin-bottom: 16px;
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
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: #a3b0ff;
`;

const CountSpan = styled.span`
  font-weight: 300;
  margin-top: 8px;
  font-style: normal;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #a3b0ff;
`;

// const BoldNumber = styled.span`
//   font-weight: bold;
//   margin-right: 4px;
// `;

const Footer = styled.div`
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 100;
  font-size: 8px;
  line-height: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #ffffff;
  @media (max-height: 600px) {
    margin-top: 30px;
    position: relative;
    top: 0%;
    left: 0%;
    transform: translate(0%, 0%);
  }
`;

export default Home;
