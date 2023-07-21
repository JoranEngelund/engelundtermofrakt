import { styled } from "styled-components";
import { IntroAnimation, FadeInAnimation } from "../../../animation/styled";

export const CardWrapper = styled.section`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem auto;
  max-width: 1020px;
  animation: ${IntroAnimation} 1s ease-in-out;
`;

export const Card = styled.div`
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  width: calc(50% - 1.5rem);
  background-color: #f4f4f4;
  border-radius: 0.5rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  animation: ${IntroAnimation} 0.6s ease-in-out;

  @media (max-width: 768px) {
    width: calc(100% - 1.5rem);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 56%;
  object-fit: cover;
  object-position: center;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  animation: ${IntroAnimation} 1s ease-in-out;
`;

export const CardTitle = styled.h2`
  margin: 1rem 0;
  font-size: 1.6rem;
  animation: ${FadeInAnimation} 1s ease-in-out;
`;

export const CardParagraph = styled.p`
  animation: ${FadeInAnimation} 1s ease-in-out;
`;
