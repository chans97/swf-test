import React from "react";
import { useHistory } from "react-router";

import styled, { keyframes } from "styled-components";
function Team({ teamName }) {
  let history = useHistory();
  const goHome = () => {
    history.push("/");
  };
  switch (teamName) {
    case "LACHICA":
      return (
        <Teammain>
          <TitleSpan>당신의 크루는</TitleSpan>
          <TeamLogo src={"logo_" + teamName + ".png"} />
          <CrewShortDescription color={"#e49897"}>
            <span>통통 튀는 매력을 가진 당신은</span>
            <span> 라치카의 크루입니다.</span>
          </CrewShortDescription>
          <CrewImg color={"#e49897"} teamName={teamName} />
          <CrewMention color={"#e49897"}>
            <span>“원래 예의가 있는데 이럴 때만 예의가 없어요”</span>
          </CrewMention>
          <CrewWords color={"rgba(228, 152, 151, 0.5);"}>
            <span>독보적 개그캐 LA언니들</span>
            <span>섹시 호탕 센스 분위기 메이커</span>
            <span>발랄 코믹 매력적 하이틴</span>
          </CrewWords>
          <ShareText>▼눌러서 공유하기</ShareText>
          <div className="addthis_inline_share_toolbox"></div>
        </Teammain>
      );
    case "HOOK":
      return (
        <Teammain>
          <TitleSpan>당신의 크루는</TitleSpan>
          <TeamLogo src={"logo_" + teamName + ".png"} />
          <CrewShortDescription>
            <span>통통 튀는 매력을 가진 당신은</span>
            <span> 훅의 크루입니다.</span>
          </CrewShortDescription>
          <CrewImg></CrewImg>
        </Teammain>
      );
    default:
      return (
        <Teammain>
          <TitleSpan>오류입니다.</TitleSpan>
        </Teammain>
      );
  }
}

const Teammain = styled.div`
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
const TeamLogo = styled.img`
  margin-top: 10px;
  width: 140px;
  margin-bottom: 32px;
`;

const CrewShortDescription = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CrewImg = styled.div`
  margin-top: 20px;
  width: 328px;
  height: 200px;
  border: 8pt solid ${(props) => props.color};
  background-image: url(team_${(props) => props.teamName}.png);
  background-repeat: no-repeat;
  background-position: center; /* Center the image */
  background-size: cover;
`;
const CrewMention = styled.div`
  margin-top: 12px;
  font-weight: 700;
  font-size: 14px;
  line-height: 23px;
  color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CrewWords = styled.div`
  margin-top: 12px;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ShareText = styled.span`
  margin-top: 40px;
  font-weight: 300;
  font-size: 10px;
  line-height: 14px;
  color: #a3b0ff;
`;
export default Team;
