import { styled } from "styled-components";
import { FadeInAnimation } from "../../animation/styled";

export const BannerContainer = styled.section`
  max-width: 100vw;
`;

export const Banner = styled.img`
  width: 100%;
  height: auto;
  animation: ${FadeInAnimation} 0.6s ease-in-out;
`;

export const AboutBanner = styled.img`
  left: 0px;
  top: 0;
  width: 100vw;
  height: 24rem;
  object-fit: cover;
  object-position: top;
  animation: ${FadeInAnimation} 0.6s ease-in-out;

  @media (max-width: 2000px) {
    height: 21rem;
  }

  @media (max-width: 1500px) {
    height: 15rem;
  }

  @media (max-width: 1000px) {
    height: 12rem;
  }

  @media (max-width: 500px) {
    height: 7rem;
  }
`;

export const Slogan = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  color: white;
  font-weight: 400;
  font-style: italic;
  width: 100%;
  padding: 1rem;
  background-color: rgb(0 0 0 / 44%);
  transform: translate(0, -102%);
  animation: ${FadeInAnimation} 0.6s ease-in-out;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const PageTitle = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  color: white;
  font-weight: 400;
  width: 100%;
  padding: 1rem;
  background-color: rgb(0 0 0 / 44%);
  transform: translate(0, -102%);
  animation: ${FadeInAnimation} 0.6s ease-in-out;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
