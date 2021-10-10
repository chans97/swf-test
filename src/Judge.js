import React, { useState } from "react";
import { useHistory } from "react-router";
import styled, { keyframes } from "styled-components";

function Judge({ teamName }) {
  let [firstClick, firstClickSetstate] = useState(0);
  let [afterClick, afterClickSetstate] = useState(0);
  let history = useHistory();
  const goResult = () => {
    history.push("/team");
  };
  const test = (e) => {
    firstClickSetstate(1);
    setTimeout(() => {
      afterClickSetstate(1);
    }, 3000);
  };

  return (
    <Jugemain>
      {afterClick ? (
        <>
          <TitleSpan2>당신의 크루는</TitleSpan2>
          <SubSpan2>카드를 클릭해서 크루에 합류하세요.</SubSpan2>{" "}
        </>
      ) : (
        <>
          <TitleSpan>파이트 저지의 선택이 도착했습니다.</TitleSpan>
          <SubSpan>카드를 클릭해서 확인하세요.</SubSpan>
        </>
      )}

      <Carddiv onClick={test}>
        {firstClick ? (
          afterClick ? (
            <Cardcrew
              onClick={goResult}
              src={"card_" + teamName + ".png"}
              alt="card"
            />
          ) : (
            <CardImg src="card_JUDGE.png" alt="card" />
          )
        ) : (
          <Cardfirst src="card_JUDGE.png" alt="card" />
        )}
      </Carddiv>
    </Jugemain>
  );
}
const Jugemain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Opacity = keyframes`
0%{opacity: 0}
100%{opacity: 1}
`;
const TitleSpan = styled.span`
  margin-top: 70px;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: #a3b0ff;
  animation: ${Opacity} 3s linear;
`;
const SubSpan = styled.span`
  margin-top: 15px;
  font-weight: 700;
  font-size: 12px;
  line-height: 29px;
  color: #ffffff;
  animation: ${Opacity} 3s linear;
`;
const TitleSpan2 = styled(TitleSpan)``;
const SubSpan2 = styled(SubSpan)``;

const rotateAnimation = keyframes`
    0%{transform: rotateY(0)}
    30%{transform: rotateY(180deg)}
    50%{transform: rotateY(0deg)}
    80%{transform: rotateY(720deg)}
    100%{transform: rotateY(1440deg)}
  `;
const Carddiv = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Cardfirst = styled.img`
  width: 80%;
  animation: ${Opacity} 3s linear;
`;
const CardImg = styled.img`
  width: 80%;
  animation: ${rotateAnimation} 3s linear;
  animation-iteration-count: 1;
`;
const Cardcrew = styled.img`
  width: 80%;
  animation: ${Opacity} 7s ease-in-out;
`;

export default Judge;
