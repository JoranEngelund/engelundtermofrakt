import styled from "styled-components";
import { IntroAnimation, FadeInAnimation } from "../../../../animation/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  animation: ${FadeInAnimation} 1s ease-in-out;
`;

export const Input = styled.input`
  border: none;
  padding: 0.33rem 1rem;
  height: 3rem;
  border-radius: 5px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px inset;
  animation: ${IntroAnimation} 1s ease-in-out;
`;

export const MessageArea = styled.textarea`
  border: none;
  padding: 0.33rem 1rem;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px inset;
  height: 10rem;
  background: white;
  animation: ${IntroAnimation} 1s ease-in-out;
`;

export const Button = styled.button`
  background: #2b2070;
  color: white !important;
  padding: 0.3rem 5rem;
  border: none;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  border-radius: 3px;
  margin: 1rem 0 2rem 0;
  transition: background-color 0.3s ease;
  animation: ${IntroAnimation} 1s ease-in-out;

  &:hover {
    background-color: rgb(43, 32, 112, 81%);
  }

  @media (max-width: 405px) {
    padding: 0.3rem 5rem;
  }
`;

export const ChallengeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ChallengeInput = styled.input`
  border: none;
  width: 5.5rem;
  padding: 0.33rem 1rem;
  height: 3rem;
  border-radius: 5px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px inset;
  animation: ${IntroAnimation} 1s ease-in-out;
`;

export const ChallengeButtonContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

export const ChallengeButton = styled(Link)`
  background: #2b2070;
  color: white !important;
  padding: 0.3rem 2rem;
  border: none;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  border-radius: 3px;
  margin: 1rem 0 2rem 0;
  transition: background-color 0.3s ease;
  animation: ${IntroAnimation} 1s ease-in-out;

  &:hover {
    background-color: rgb(43, 32, 112, 81%);
  }

  @media (max-width: 405px) {
    padding: 0.3rem 5rem;
  }
`;

export const FileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FileInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TranslationParagraph = styled.p`
  font-size: 0.9rem;
  font-style: italic;
  animation: ${IntroAnimation} 1s ease-in-out;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 1rem;
  max-width: 36rem;
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${IntroAnimation} 1s ease-in-out;
`;

export const InfoParagraph = styled.p`
  margin-bottom: 0;
  animation: ${IntroAnimation} 1s ease-in-out;
`;

export const Label = styled.label`
  margin-bottom: 0.7rem;
  font-weight: bolder;
  animation: ${IntroAnimation} 1s ease-in-out;
`;

export const AnimatedPara = styled.p`
  animation: ${IntroAnimation} 1s ease-in-out;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: green;
  animation: ${IntroAnimation} 1s ease-in-out;
`;

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  animation: ${IntroAnimation} 1s ease-in-out;
`;

export const SuccessMessage = styled.p`
  max-width: 36rem;
`;

export const StyledCorrectIcon = styled(FontAwesomeIcon)`
  margin-top: 1rem;
  font-size: 2rem;
  color: green;
  animation: ${IntroAnimation} 1s ease-in-out;
`;
