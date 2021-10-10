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
      <TitleSpan>현재 Judge : {}</TitleSpan>

      <SubSpan>현재 Judge : {}</SubSpan>
      <CardImg src="card_JUDGE.png" onClick={goResult} />
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
const roll2 = keyframes`
  0% {
    opacity: 1;
    left: 50%;
  }
  100% {
    opacity: 0;
    left: 50%;
  }
`;
const CardImg = styled.img`
  margin-top: 20px;
  width: 80%;
  &:hover {
    animation: ${roll2} 1s;
  }
`;

export default Judge;
