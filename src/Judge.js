import React from "react";
import { useHistory } from "react-router";
import styled, { keyframes } from "styled-components";

function Judge() {
  let history = useHistory();
  const goResult = () => {
    history.push("/team");
  };
  return (
    <Problemmain>
      <TitleSpan>파이트 저지의 선택이 도착했습니다.{}</TitleSpan>

      <SubSpan>카드를 스크롤해서 확인하세요.</SubSpan>
      <Carddiv onMouseLeave={goResult}>
        <CardImg src="card_JUDGE.png" />
      </Carddiv>
    </Problemmain>
  );
}
const Problemmain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleSpan = styled.span`
  margin-top: 70px;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: #a3b0ff;
`;
const SubSpan = styled.span`
  margin-top: 15px;
  font-weight: 700;
  font-size: 12px;
  line-height: 29px;
  color: #ffffff;
`;

const rotateAnimation = keyframes`
    0%{transform: rotateY(0)}
    100%{transform: rotateY(360deg)}
  
  `;
const Carddiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardImg = styled.img`
  margin-top: 20px;
  width: 80%;
  &:hover {
    animation: ${rotateAnimation} 2s ease infinite;
  }
`;

export default Judge;
