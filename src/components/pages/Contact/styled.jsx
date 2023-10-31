import styled from "styled-components";

export const HeadingContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`;

export const FormNavigation = styled.h3`
  text-decoration: underline;
  font-size: 1.4rem;
  font-weight: 400;
  cursor: pointer;
  margin: 1rem 0 2rem;
`;

export const UnactiveNavigation = styled.h3`
  opacity: 0.6;
  text-decoration: none;
  font-weight: 400;
  cursor: pointer;
  font-size: 1.4rem;
  margin: 1rem 0 2rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;
