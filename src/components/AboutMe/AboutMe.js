import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkedin from "../../svg/linkedin.svg";

const AboutMe = () => {
  const socialNetworks = [
    {
      name: "Github",
      link: "https://github.com/rgarrodeltreecomar",
      logo: logoGithub,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/rodrigo-garro-b69b27327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      logo: logoLinkedin,
    },

    
  ];

  return (
    <S.ContainerAboutMe id="about-me">
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>👋🏼 Hello, i'm</p>
            <p>Rodrigo Garro</p>
            <p>Frontend Developer</p>
          </S.Title>
          <S.DescriptionText>
          I am a passionate programming student aiming to become a full-stack developer.
          I have skills in React JS, JavaScript, and TypeScript, and I have worked on projects
          with Node.js. I love programming and enjoy front-end design.
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
          <img src="/img/profile.png" alt="Rodrigo Garro - Frontend Developer" />
        </S.ContainerImage>
      </S.ContainerFlex>
    </S.ContainerAboutMe>
  );
};

export default AboutMe;
