import styled, { keyframes } from "styled-components";

const reveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.985);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
`;

export const Hero = styled.header`
  background:
    #f3f5f8,
    linear-gradient(180deg, rgba(11, 18, 32, 0.92), rgba(11, 18, 32, 0.85));
  padding: 64px 16px 36px;
`;

export const HeroInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const H1 = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  line-height: 1.05;
  margin: 0 0 12px;
  color: rgba(0, 0, 0, 0.95);
`;

export const Subtitle = styled.p`
  margin: 0;
  max-width: 720px;
  font-size: 1.05rem;
  color: rgba(0, 0, 0, 0.7);
`;

export const Section = styled.section`
  background: #f3f5f8;
  padding: 26px 16px 44px;
`;

export const Empty = styled.p`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 14px;

  @media (max-width: 520px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
  }
`;

export const Tile = styled.a`
  display: block;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.92);
  box-shadow:
    0 8px 24px rgba(15, 23, 42, 0.08),
    0 1px 2px rgba(15, 23, 42, 0.06);

  transform: translateZ(0);
  transition:
    transform 200ms ease,
    box-shadow 200ms ease;

  /* Start hidden */
  opacity: 0;
  transform: translateY(12px);

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 14px 38px rgba(15, 23, 42, 0.12),
      0 2px 6px rgba(15, 23, 42, 0.08);
  }

  /* Reveal when in view AND loaded */
  &[data-reveal="true"] {
    animation: ${reveal} 520ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
    animation-delay: var(--d, 0ms);
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1 !important;
    transform: none !important;
    animation: none !important;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;

  @media (max-width: 520px) {
    height: 170px;
  }
`;
