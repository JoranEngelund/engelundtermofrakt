import { styled } from "styled-components";
import { IntroAnimation } from "../../../../animation/styled";

export const ContentWrapper = styled.section`
  background-color: #f4f4f4;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  margin-top: -2rem;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  animation: ${IntroAnimation} 0.6s ease-in-out;

  @media (max-width: 855px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const FormWrapper = styled.section`
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;

  margin: 1rem 0;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  animation: ${IntroAnimation} 0.6s ease-in-out;

  @media (max-width: 855px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContactWrapper = styled.div`
  margin: 1rem 1rem;
  max-width: 37rem;
`;

export const ContactTitle = styled.h2`
  margin: 0rem 1rem 2rem 0rem;
  animation: ${IntroAnimation} 0.6s ease-in-out;
`;

export const ContactContent = styled.p`
  font-size: 1rem;
  margin: 2rem 0rem;
  animation: ${IntroAnimation} 0.6s ease-in-out;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 330px) {
    margin: 2rem 0;
  }
`;
