import { styled } from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 4rem 2rem;
  background-color: #f4f4f4;
  padding: 4rem;
`;

export const ErrorMessage = styled.p`
  font-size: 1.5rem;
`;

export const ReloadButton = styled.button`
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
