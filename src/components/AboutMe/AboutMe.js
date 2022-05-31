import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkedin from "../../svg/linkedin.svg";
import logoUdemy from "../../svg/udemy.svg";
import logoYoutube from "../../svg/youtube.svg";

const AboutMe = () => {
  const socialNetworks = [
    {
      name: "Github",
      link: "https://github.com/ratasi",
      logo: logoGithub,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/rafa-t%C3%A1rrega-a2b16713b/",
      logo: logoLinkedin,
    },
    {
      name: "Udemy",
      link: "https://udemy.com/user/rafatarre",
      logo: logoUdemy,
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/channel/UCYXgfyWaoV1BgbuQUuLQcCA",
      logo: logoYoutube,
    },
  ];

  return (
    <S.ContainerAboutMe id="about-me">
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>👋🏼 Hello, i'm</p>
            <p>Rafa Tárrega</p>
            <p>Frontend Developer</p>
          </S.Title>
          <S.DescriptionText>
            lorem ipsum lorem ipsum lorem ipsum lorem upsum lorem lorem ipsum
            lorem upsum lorem lorem ipsum .lorem upsum lorem lorem ipsum lorem
            upsum lorem
          </S.DescriptionText>
          <S.ContainerIcons>
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.link}
                target="__blank"
                rel="noreferrer"
              >
                <img src={network.logo} alt={network.name} />
              </a>
            ))}
          </S.ContainerIcons>
        </S.ContainerText>
        <S.ContainerImage>
          <img src="/img/profile.png" alt="Rafa Tárrega - Frontend Developer" />
        </S.ContainerImage>
      </S.ContainerFlex>
    </S.ContainerAboutMe>
  );
};

export default AboutMe;
