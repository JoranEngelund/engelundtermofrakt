import {
  IntroAnimation,
  FadeInAnimation,
} from "../../../../../animation/styled";
import { styled } from "styled-components";

export const CardWrapper = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

export const Card = styled.div`
    background-color: #f4f4f4;
    border-radius: 0.5rem;
    display: flex;
    max-width: 1020px;
    animation: {IntroAnimation} 0.6s ease-in-out;
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%);

  @media (max-width: 765px) {
    background-color: #f4f4f4;
    border-radius: 0.5rem;
    margin: 
    display: flex;
    flex-direction: column;
    margin: 0 2rem;

     &:nth-child(even) {
    flex-direction: column;
    
  }
  }

`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 2rem;
  max-width: 1020px;
  animation: {IntroAnimation} 0.6s ease-in-out;
`;

export const CardImage = styled.img`
  width: 50%;
  object-fit: cover;
  object-position: center;
  animation: ${IntroAnimation} 1s ease-in-out;

  @media (max-width: 765px) {
    width: 100%;
  }
`;

export const CardTitle = styled.h2`
  margin: 1rem 0;
  font-size: 1.6rem;
  animation: ${FadeInAnimation} 1s ease-in-out;
`;

export const CardParagraph = styled.p`
  animation: ${FadeInAnimation} 1s ease-in-out;
`;
