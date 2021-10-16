import React from "react";
import { useHistory } from "react-router";

import styled from "styled-components";

function Nopage() {
  let history = useHistory();
  const goTest = () => {
    history.push("/problem");
  };
  return (
    <Homemain>
      <Btn onClick={goTest}>
        <BtnSpan>나와 어울리는</BtnSpan>
        <BtnSpan>댄스 크루 찾으러 가기</BtnSpan>
      </Btn>
      <BtnSpan>잘못된 접근입니다.</BtnSpan>
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
  margin-bottom: 20px;
  border: 1px solid #a3b0ff;
  box-sizing: border-box;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const BtnSpan = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: #a3b0ff;
`;
export default Nopage;
