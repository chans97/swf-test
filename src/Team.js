import React, { useEffect } from "react";
import { useHistory } from "react-router";

import styled from "styled-components";
const { Kakao } = window;

function Team({ teamName }) {
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
  let history = useHistory();
  const goHome = () => {
    history.push("/");
  };
  const sendUrl = "https://swftest.netlify.app"; // 전달할 URL
  const shareFacebook = () => {
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
  };
  const shareTwitter = () => {
    var sendText = "스우파 테스트"; // 전달할 텍스트
    window.open(
      "https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl
    );
  };
  const shareKakao = () => {
    Kakao.Link.createDefaultButton({
      container: "#kakaoBtn", // 카카오공유버튼ID
      objectType: "feed",
      content: {
        title: "스우파 테스트", // 보여질 제목
        description: "나는 어떤 댄스 크루일까?", // 보여질 설명
        imageUrl: "https://swftest.netlify.app/kakaoimg.png", // 콘텐츠 URL
        link: {
          mobileWebUrl: "https://swftest.netlify.app",
          webUrl: "https://swftest.netlify.app",
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러 가기!",
          link: {
            mobileWebUrl: "https://swftest.netlify.app",
            webUrl: "https://swftest.netlify.app",
          },
        },
      ],
    });
  };
  const copyToClipboard = () => {
    var url = "";
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    url = "https://swftest.netlify.app";
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("링크가 복사되었습니다.");
  };

  switch (teamName) {
    case "LACHICA":
      return (
        <Teammain>
          <TitleSpan>당신의 크루는</TitleSpan>
          <TeamLogo src={"logo_" + teamName + ".png"} />
          <CrewShortDescription color={"#e49897"}>
            <span>통통 튀는 매력을 가진 당신은</span>
            <span> 라치카 크루입니다.</span>
          </CrewShortDescription>
          <CrewImg color={"#e49897"} teamName={teamName} ypos={"-50px"} />
          <CrewMention color={"#e49897"}>
            <span>“원래 예의가 있는데 이럴 때만 예의가 없어요”</span>
          </CrewMention>
          <CrewWords color={"rgba(228, 152, 151, 0.5);"}>
            <span>독보적 개그캐 LA언니들</span>
            <span>섹시 호탕 센스 분위기 메이커</span>
            <span>발랄 코믹 매력적 하이틴</span>
          </CrewWords>
          <ShareText>▼ 눌러서 공유하기</ShareText>
          <ImgDiv>
            <img
              style={{ cursor: "pointer" }}
              onClick={shareFacebook}
              src="icon-facebook.png"
              alt="shareFacebook"
            />
            <img
              style={{ cursor: "pointer" }}
              id="kakaoBtn"
              onClick={shareKakao}
              src="icon-kakao.png"
              alt="shareKakao"
            />
            <img
              style={{ cursor: "pointer" }}
              onClick={shareTwitter}
              src="icon-twitter.png"
              alt="shareTwitter"
            />
            <Linki onClick={copyToClipboard}>
              <i className="fas fa-link"></i>
            </Linki>
          </ImgDiv>
          <ShareText onClick={goHome}>테스트 다시하기</ShareText>

          <Addiv className="adfit" />
        </Teammain>
      );
    case "YGX":
      return (
        <Teammain>
          <TitleSpan>당신의 크루는</TitleSpan>
          <TeamLogo src={"logo_" + teamName + ".png"} />
          <CrewShortDescription color={"#DEDFE3"}>
            <span>능력과 전략으로 무장한 당신은</span>
            <span> YGX 크루입니다.</span>
          </CrewShortDescription>
          <CrewImg color={"#DEDFE3"} teamName={teamName} ypos={"-20px"} />
          <CrewMention color={"#DEDFE3"}>
            <span>“내가 약자? 난 한 번도 약자였던 적이 없는데”</span>
          </CrewMention>
          <CrewWords color={"rgba(222, 223, 227, 0.5);"}>
            <span>핫루키 Young 능력캐포진</span>
            <span>전략적 냉정 화려한커리어</span>
            <span>칼군무 대중적 빠른판단 </span>
          </CrewWords>
          <ShareText>▼ 눌러서 공유하기</ShareText>
          <ImgDiv>
            <img
              style={{ cursor: "pointer" }}
              onClick={shareFacebook}
              src="icon-facebook.png"
              alt="shareFacebook"
            />
            <img
              style={{ cursor: "pointer" }}
              id="kakaoBtn"
              onClick={shareKakao}
              src="icon-kakao.png"
              alt="shareKakao"
            />
            <img
              style={{ cursor: "pointer" }}
              onClick={shareTwitter}
              src="icon-twitter.png"
              alt="shareTwitter"
            />
            <Linki onClick={copyToClipboard}>
              <i className="fas fa-link"></i>
            </Linki>
          </ImgDiv>
          <ShareText onClick={goHome}>테스트 다시하기</ShareText>

          <Addiv className="adfit" />
        </Teammain>
      );
    case "WANT":
      return (
        <Teammain>
          <TitleSpan>당신의 크루는</TitleSpan>
          <TeamLogo src={"logo_" + teamName + ".png"} />
          <CrewShortDescription color={"#26D6BF"}>
            <span>밝고 활기차게 즐길 줄 아는 당신은</span>
            <span> 원트 크루입니다.</span>
          </CrewShortDescription>
          <CrewImg color={"#26D6BF"} teamName={teamName} ypos={"-20px"} />
          <CrewMention color={"#26D6BF"}>
            <span>"아무리 뒤에 있어도 저 밖에 안 보일 거예요”</span>
          </CrewMention>
          <CrewWords color={"rgba(38, 214, 191, 0.5);"}>
            <span>외유내강 대중적 인기쟁이 </span>
            <span>성장캐 리액션부자 활발 </span>
            <span>장난꾸러기 엔트로핀 담당</span>
          </CrewWords>
          <ShareText>▼ 눌러서 공유하기</ShareText>
          <ImgDiv>
            <img
              style={{ cursor: "pointer" }}
              onClick={shareFacebook}
              src="icon-facebook.png"
              alt="shareFacebook"
            />
            <img
              style={{ cursor: "pointer" }}
              id="kakaoBtn"
              onClick={shareKakao}
              src="icon-kakao.png"
              alt="shareKakao"
            />
            <img
              style={{ cursor: "pointer" }}
              onClick={shareTwitter}
              src="icon-twitter.png"
              alt="shareTwitter"
            />
            <Linki onClick={copyToClipboard}>
              <i className="fas fa-link"></i>
            </Linki>
          </ImgDiv>
          <ShareText onClick={goHome}>테스트 다시하기</ShareText>

          <Addiv className="adfit" />
        </Teammain>
      );

    case "WAYB":
      return (
        <Teammain>
          <TitleSpan>당신의 크루는</TitleSpan>
          <TeamLogo src={"logo_" + teamName + ".png"} />
          <CrewShortDescription color={"#7DD0FC"}>
            <span>꼼꼼함과 유연함을 갖춘 당신은</span>
            <span> 웨이비 크루입니다.</span>
          </CrewShortDescription>
          <CrewImg color={"#7DD0FC"} teamName={teamName} ypos={"-40px"} />
          <CrewMention color={"#7DD0FC"}>
            <span>"이기려고 이 악물어야죠."</span>
          </CrewMention>
          <CrewWords color={"rgba(125, 208, 252, 0.5);"}>
            <span>스타일리시 완벽주의 꼼꼼한 </span>
            <span>조용하게강한 아기호랑이 유연한 </span>
            <span>열정넘치는 철두철미한 디테일 </span>
          </CrewWords>
          <ShareText>▼ 눌러서 공유하기</ShareText>
          <ImgDiv>
            <img
              style={{ cursor: "pointer" }}
              onClick={shareFacebook}
              src="icon-facebook.png"
              alt="shareFacebook"
            />
            <img
              style={{ cursor: "pointer" }}
              id="kakaoBtn"
              onClick={shareKakao}
              src="icon-kakao.png"
              alt="shareKakao"
            />
            <img
              style={{ cursor: "pointer" }}
              onClick={shareTwitter}
              src="icon-twitter.png"
              alt="shareTwitter"
            />
            <Linki onClick={copyToClipboard}>
              <i className="fas fa-link"></i>
            </Linki>
          </ImgDiv>
          <ShareText onClick={goHome}>테스트 다시하기</ShareText>

          <Addiv className="adfit" />
        </Teammain>
      );
    case "COCANBUTTER":
      return (
        <Teammain>
          <TitleSpan>당신의 크루는</TitleSpan>
          <TeamLogo src={"logo_" + teamName + ".png"} />
          <CrewShortDescription color={"#fae944"}>
            <span>압도적인 카리스마로 밀어붙이는</span>
            <span> 코카앤버터 크루입니다.</span>
          </CrewShortDescription>
          <CrewImg color={"#fae944"} teamName={teamName} ypos={"-50px"} />
          <CrewMention color={"#fae944"}>
            <span>“우린 스트릿이거든. 연예인 우먼 파이터 아니고”</span>
          </CrewMention>
          <CrewWords color={"rgba(250, 233, 68, 0.5);"}>
            <span>카리스마 외강내유 카멜레온 </span>
            <span>순한 가내수공업 겉바속촉 </span>
            <span>스펙트럼 실수를기회로 독특</span>
          </CrewWords>
          <ShareText>▼ 눌러서 공유하기</ShareText>
          <ImgDiv>
            <img
              style={{ cursor: "pointer" }}
              onClick={shareFacebook}
              src="icon-facebook.png"
              alt="shareFacebook"
            />
            <img
              style={{ cursor: "pointer" }}
              id="kakaoBtn"
              onClick={shareKakao}
              src="icon-kakao.png"
              alt="shareKakao"
            />
            <img
              style={{ cursor: "pointer" }}
              onClick={shareTwitter}
              src="icon-twitter.png"
              alt="shareTwitter"
            />
            <Linki onClick={copyToClipboard}>
              <i className="fas fa-link"></i>
            </Linki>
          </ImgDiv>
          <ShareText onClick={goHome}>테스트 다시하기</ShareText>

          <Addiv className="adfit" />
        </Teammain>
      );
    case "PROWDMON":
      return (
        <Teammain>
          <TitleSpan>당신의 크루는</TitleSpan>
          <TeamLogo src={"logo_" + teamName + ".png"} />
          <CrewShortDescription color={"#EC6E17"}>
            <span>새로운 실험에 도전하는 당신은</span>
            <span> 프라우드먼 크루입니다.</span>
          </CrewShortDescription>
          <CrewImg color={"#EC6E17"} teamName={teamName} ypos={"-20px"} />
          <CrewMention color={"#EC6E17"}>
            <span>
              “댄서는 즐거움 그 이상의 것을 <br />
              담을 수 있는 예술입니다.”
            </span>
          </CrewMention>
          <CrewWords color={"rgba(236, 110, 23, 0.5);"}>
            <span>원조 선생님 실험적 도전적 </span>
            <span>자존감 완벽을추구 젠더리스 </span>
            <span>노련함 호탕함 예술적 메세지 </span>
          </CrewWords>
          <ShareText>▼ 눌러서 공유하기</ShareText>
          <ImgDiv>
            <img
              style={{ cursor: "pointer" }}
              onClick={shareFacebook}
              src="icon-facebook.png"
              alt="shareFacebook"
            />
            <img
              style={{ cursor: "pointer" }}
              id="kakaoBtn"
              onClick={shareKakao}
              src="icon-kakao.png"
              alt="shareKakao"
            />
            <img
              style={{ cursor: "pointer" }}
              onClick={shareTwitter}
              src="icon-twitter.png"
              alt="shareTwitter"
            />
            <Linki onClick={copyToClipboard}>
              <i className="fas fa-link"></i>
            </Linki>
          </ImgDiv>
          <ShareText onClick={goHome}>테스트 다시하기</ShareText>

          <Addiv className="adfit" />
        </Teammain>
      );

    case "HOLYBANG":
      return (
        <Teammain>
          <TitleSpan>당신의 크루는</TitleSpan>
          <TeamLogo src={"logo_" + teamName + ".png"} />
          <CrewShortDescription color={"#a366ff"}>
            <span>독보적인 색깔에 자신 있는 당신은</span>
            <span> 홀리뱅 크루입니다.</span>
          </CrewShortDescription>
          <CrewImg color={"#a366ff"} teamName={teamName} ypos={"-40px"} />
          <CrewMention color={"#a366ff"}>
            <span>
              "그래 너희는 못 따라해. 우리만 할 수 있는 거야.
              <br />
              우리가 힙합이다."
            </span>
          </CrewMention>
          <CrewWords color={"rgba(163, 102, 255, 0.5);"}>
            <span>컬크러쉬 명언제조기 독보적 </span>
            <span>스트릿의정수 간지나는 자신감 </span>
            <span>강약조절 박력 독창적 </span>
          </CrewWords>
          <ShareText>▼ 눌러서 공유하기</ShareText>
          <ImgDiv>
            <img
              style={{ cursor: "pointer" }}
              onClick={shareFacebook}
              src="icon-facebook.png"
              alt="shareFacebook"
            />
            <img
              style={{ cursor: "pointer" }}
              id="kakaoBtn"
              onClick={shareKakao}
              src="icon-kakao.png"
              alt="shareKakao"
            />
            <img
              style={{ cursor: "pointer" }}
              onClick={shareTwitter}
              src="icon-twitter.png"
              alt="shareTwitter"
            />
            <Linki onClick={copyToClipboard}>
              <i className="fas fa-link"></i>
            </Linki>
          </ImgDiv>
          <ShareText onClick={goHome}>테스트 다시하기</ShareText>

          <Addiv className="adfit" />
        </Teammain>
      );

    case "HOOK":
      return (
        <Teammain>
          <TitleSpan>당신의 크루는</TitleSpan>
          <TeamLogo src={"logo_" + teamName + ".png"} />
          <CrewShortDescription color={"#ec1d25"}>
            <span>타고난 위트로 새로움을 선사하는 당신은</span>
            <span>훅 크루입니다.</span>
          </CrewShortDescription>
          <CrewImg color={"#ec1d25"} teamName={teamName} ypos={"-60px"} />
          <CrewMention color={"#ec1d25"}>
            <span>"잊지마 우리 에너지는 즐거운 바이브라는 거"</span>
          </CrewMention>
          <CrewWords color={"rgba(236, 29, 37, 0.5);"}>
            <span>위트 뮤지컬스러운 센스 </span>
            <span>참신한기획 새로움 퍼포먼스 서사</span>
            <span>눈을뗄수없는 몰입력 흥이나는</span>
          </CrewWords>
          <ShareText>▼ 눌러서 공유하기</ShareText>
          <ImgDiv>
            <img
              style={{ cursor: "pointer" }}
              onClick={shareFacebook}
              src="icon-facebook.png"
              alt="shareFacebook"
            />
            <img
              style={{ cursor: "pointer" }}
              id="kakaoBtn"
              onClick={shareKakao}
              src="icon-kakao.png"
              alt="shareKakao"
            />
            <img
              style={{ cursor: "pointer" }}
              onClick={shareTwitter}
              src="icon-twitter.png"
              alt="shareTwitter"
            />
            <Linki onClick={copyToClipboard}>
              <i className="fas fa-link"></i>
            </Linki>
          </ImgDiv>
          <ShareText onClick={goHome}>테스트 다시하기</ShareText>

          <Addiv className="adfit" />
        </Teammain>
      );
    default:
      return (
        <Teammain>
          <TitleSpan>오류입니다.</TitleSpan>

          <Addiv className="adfit" />
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
  margin-top: 40px;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: #a3b0ff;
`;
const TeamLogo = styled.img`
  margin-top: 15px;
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
  text-align: center;
`;
const CrewImg = styled.div`
  margin-top: 20px;
  width: 328px;
  height: 200px;
  border: 8pt solid ${(props) => props.color};
  background-image: url(team_${(props) => props.teamName}.png);
  background-repeat: no-repeat;

  background-position: center bottom ${(props) => props.ypos};
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

  text-align: center;
  padding: 0px 40px;
`;
const CrewWords = styled.div`
  margin-top: 12px;
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ShareText = styled.span`
  margin-top: 10px;
  margin-bottom: 12px;
  font-weight: 300;
  font-size: 10px;
  line-height: 14px;
  color: #a3b0ff;
  cursor: pointer;
`;

const ImgDiv = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Addiv = styled.div`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Linki = styled.div`
  width: 40px;
  background-color: chocolate;
  height: 40px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  cursor: pointer;
`;
export default Team;
