import { styled } from "styled-components";
import { FadeInAnimation, IntroAnimation } from "../../../animation/styled";
import { Link } from "react-router-dom";

export const ContactCardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1.5rem;
  background-color: #f4f4f4;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  animation: ${IntroAnimation} 1s ease-in-out;
`;

export const ContactTitle = styled.h2`
  margin: 2rem 1rem;
  animation: ${FadeInAnimation} 1s ease-in-out;
`;

export const ContactParagraph = styled.p`
  max-width: 46rem;
  margin: 0 1rem 1rem;
  animation: ${FadeInAnimation} 1s ease-in-out;
`;

export const ButtonWrapper = styled.div`
  margin: 1rem 0 2rem 0;
  animation: ${IntroAnimation} 1s ease-in-out;
`;

export const ContactButton = styled(Link)`
  text-decoration: none;
  background: #2b2070;
  color: white !important;
  padding: 0.3rem 1.9rem;
  border: none;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  border-radius: 3px;
  margin: 1rem 0 2rem 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(43, 32, 112, 81%);
  }
`;
