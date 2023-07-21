import { styled } from "styled-components";
import { IntroAnimation } from "../../../animation/styled";
import { Link } from "react-router-dom";

export const IntroCardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
  background-color: #f4f4f4;
  margin-top: -2rem;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  animation: ${IntroAnimation} 0.6s ease-in-out;
`;

export const IntroTitle = styled.h2`
  margin: 2rem 1rem;
`;

export const IntroParagraph = styled.p`
  max-width: 46rem;
  margin: 0 1rem 1rem;
`;

export const ButtonWrapper = styled.div`
  margin: 1rem 0 2rem 0;
`;

export const IntroButton = styled(Link)`
  text-decoration: none;
  background: #2b2070;
  color: white !important;
  padding: 0.3rem 1.9rem;
  border: none;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  border-radius: 5%;
  margin: 1rem 0 2rem 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(43, 32, 112, 81%);
  }
`;
