import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9999;
  width: -webkit-fill-available;
  height: 50vh;
`;

export const LoadingIcon = styled.img`
  animation: ${spin} 1s infinite linear;
  max-width: 100%;
  height: auto;
`;
