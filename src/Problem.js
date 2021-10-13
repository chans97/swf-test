import React, { useEffect } from "react";
import { useHistory } from "react-router";

import styled, { keyframes } from "styled-components";
function Problem({ step, firstAnswer, secondAnswer }) {
  let history = useHistory();
  const seeResult = () => {
    history.push("/judge");
  };
  let endFlag = 0;
  if (step >= 8) {
    endFlag = 1;
  }
  useEffect(() => {
    let ins = document.createElement("ins");
    let scr = document.createElement("script");

    ins.className = "kakao_ad_area";
    ins.style = "display:none; width:100%;";
    scr.async = "true";
    scr.type = "text/javascript";
    scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    ins.setAttribute("data-ad-width", "320");
    ins.setAttribute("data-ad-height", "100");
    ins.setAttribute("data-ad-unit", "DAN-ZqR4Npz8VrhNg5g9");

    document.querySelector(".adfit").appendChild(ins);
    document.querySelector(".adfit").appendChild(scr);
  });
  const roundTitleList = [
    "첫 등장",
    "약자 지목 배틀 1",
    "약자 지목 배틀 2",
    "계급미션",
    "워스트 댄서 지목",
    "K-pop 4대 천왕",
    "메가 크루 미션",
    "탈락 크루 지정",
  ];
  const questionList1 = [
    "묘한 긴장감 속 첫 등장!",
    "누가 나를 약자로 뽑았는지 공개!",
    "팀의 점수를 올리기 위해 약자를 지목해야 ",
    "안무 채택에서 실패한 우리 팀...",
    "축하합니다!!! 메인댄서가 되셨습니다.",
    "원하는 파트가 겹친다.",
    "대중들의 투표가 간절하다.",
    "스우파 ",
  ];
  const questionList2 = [
    "나라면 어떻게 기선을 제압할까?",
    "많은 사람들이 나를 약자로 골랐다면?",
    "한다. 나라면 누구를 지목할 것인가?",
    "메인댄서를 차지하기 위한 전략은?",
    "워스트 댄서는 누구인가요?",
    "우리 팀이 원하는 파트를 쟁취하는 방법은?",
    "셀럽들을 부를 수 있다면, 부를 것인가?",
    "최고의 명대사는?",
  ];
  const answerList1 = [
    "모자를 푹 눌러 쓰고, 포스로 기선을 제압",
    "많은 사람들과 배틀할 생각에 걱정이 된다.",
    "내가 이길 수 있다고 생각되는 상대를 고른다.",
    "조용히 기회를 노리다 메인댄서 오디션에서 몸이 부서져라 춤춘다.",
    "전략적으로 가자. 견제 대상 1위인 너!",
    '"언니가 돋보이는 파트는 이거에요~" 파트 쟁취를 위해 설득에 들어간다.',

    '"제작진이 정한 룰이니 괜찮다!" 연락을 돌려 데려온다.',
    "잘 봐 언니들 싸움이다.",
  ];
  const answerList2 = [
    "두 팔을 하늘 위로-! 자신감으로 기선을 제압",
    '"감히 나를 약자로 지목해?" 분노에 찬다.',
    "이긴다는 확신은 없지만 반드시 겨뤄보고 싶었던 상대를 고른다.",
    "우리 팀에게 불리한 자리를 주는 안무가에게 적극적으로 항의한다.",
    "솔직하게 가자. 제일 못한 건 너!",
    '"이 파트는 저희가 해야 멋있어요" 유리한 파트를 사수하기 위해 한 발도 물러서지 않는다.',

    '"이건 댄서들끼리의 싸움이지." 셀럽을 부르지 않는다.',
    "믓찌다 믓찌다 울 언니!",
  ];
  return (
    <Problemmain>
      <Title>
        R{step} {roundTitleList[step - 1]}
      </Title>
      <Line />
      <Dots>
        {step < 1 ? <Dot /> : <DotFill />}
        {step < 2 ? <Dot /> : <DotFill />}
        {step < 3 ? <Dot /> : <DotFill />}
        {step < 4 ? <Dot /> : <DotFill />}
        {step < 5 ? <Dot /> : <DotFill />}
        {step < 6 ? <Dot /> : <DotFill />}
        {step < 7 ? <Dot /> : <DotFill />}
        {step < 8 ? <Dot /> : <DotFill />}
      </Dots>
      <Qdiv>
        <span>{questionList1[step - 1]}</span>
        <span>{questionList2[step - 1]}</span>
      </Qdiv>

      <Btn onClick={endFlag ? seeResult : firstAnswer}>
        {answerList1[step - 1]}
      </Btn>
      <Btn onClick={endFlag ? seeResult : secondAnswer}>
        {answerList2[step - 1]}
      </Btn>
      <LogoRoll>
        <Logoimg src="logo_COCANBUTTER.png" alt="" srcset="" />
        <Logoimg src="logo_HOLYBANG.png" alt="" srcset="" />
        <Logoimg src="logo_HOOK.png" alt="" srcset="" />
        <Logoimg src="logo_LACHICA.png" alt="" srcset="" />
      </LogoRoll>
      <LogoRoll2>
        <Logoimg src="logo_PROWDMON.png" alt="" srcset="" />
        <Logoimg src="logo_want.png" alt="" srcset="" />
        <Logoimg src="logo_WAYB.png" alt="" srcset="" />
        <Logoimg src="logo_YGX.png" alt="" srcset="" />
      </LogoRoll2>
      <Addiv className="adfit" />
    </Problemmain>
  );
}

const Problemmain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  margin-top: 56px;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  display: flex;
  color: #ffffff;
`;

const Line = styled.div`
  margin-top: 10px;
  width: 182px;

  border: 1px solid #ffffff;
`;

const Dots = styled.div`
  margin-top: -5px;
  width: 186px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DotFill = styled.div`
  width: 9px;
  height: 9px;
  left: 85px;
  top: 80px;
  background: #ffffff;
  border-radius: 100px;
`;

const Dot = styled.div`
  width: 9px;
  height: 9px;
  left: 85px;
  top: 80px;
  background: #1f1d1e;
  border: 1px solid #ffffff;

  border-radius: 100px;
`;

const Qdiv = styled.div`
  margin-top: 90px;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  color: #a3b0ff;
`;

const Btn = styled.div`
  width: 328px;
  height: 55px;
  margin-top: 15px;
  border: 1px solid #a3b0ff;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 17px;
  color: #a3b0ff;
  cursor: pointer;
  padding: 19px;
  text-align: center;
`;

const roll1 = keyframes`
  0% {
    opacity: 1;
    left: 150%;
  }
  49.9% {
    opacity: 1;
    left: -50%;
  }
  50% {
    opacity: 0;
    left: -50%;
  }
  50.1% {
    opacity: 0;
    left: 150%;
  }
  50.11% {
    opacity: 1;
    left: 150%;
  }
  100% {
    opacity: 1;
    left: -50%;
  }
`;
const roll2 = keyframes`
  0% {
    opacity: 1;
    left: 50%;
  }
  24.95% {
    opacity: 1;
    left: -50%;
  }
  24.98% {
    opacity: 0;
    left: -50%;
  }
  24.99% {
    opacity: 0;
    left: 150%;
  }
  25%{
    opacity: 1;
    left: 150%;
  }
  75% {
    opacity: 1;
    left: -50%;
  }
  75.1%{
    opacity: 0;
    left: -50%;
  }
  75.11%{
    opacity: 0;
    left: 150%;
  }
  75.12%{
    opacity: 1;
    left: 150%;
  }
  100% {
    opacity: 1;
    left: 50%;
  }
`;
const LogoRoll = styled.div`
  position: fixed;
  top: 84%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  animation: ${roll2} 35s infinite linear;
  overflow: hidden;
`;
const LogoRoll2 = styled.div`
  position: fixed;
  top: 84%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  animation: ${roll1} 35s infinite linear;
  overflow: hidden;
`;

const Logoimg = styled.img`
  width: 70px;
`;

const Addiv = styled.div`
  position: fixed;
  top: 88%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, 0%);
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export default Problem;
