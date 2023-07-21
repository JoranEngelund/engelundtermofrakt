import { styled } from "styled-components";
import { IntroAnimation } from "../../../../../animation/styled";
import { Link } from "react-router-dom";

export const IntroCardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
  background-color: #f4f4f4;
  margin-top: -2rem;
  width: 100vw;
  animation: ${IntroAnimation} 0.6s ease-in-out;
`;

export const IntroParagraph = styled.p`
  margin: 1rem 1rem;
  max-width: 46rem;
`;

export const ButtonWrapper = styled.div`
  margin: 1rem 0 2rem 0;
`;
