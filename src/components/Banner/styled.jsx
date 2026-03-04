import { styled } from "styled-components";
import { FadeInAnimation, IntroAnimation } from "../../animation/styled";
import { Link } from "react-router-dom";

export const BannerContainer = styled.section`
  position: relative;
  width: 100%;
  height: clamp(420px, 62vh, 720px);
  overflow: hidden;
  margin-bottom: 4rem;
`;

export const Banner = styled.img`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  animation: ${FadeInAnimation} 0.8s ease-in-out;

  /* subtil zoom */
  transform: scale(1.06);
  animation: heroZoom 18s ease-out forwards;

  @keyframes heroZoom {
    from {
      transform: scale(1.08);
    }
    to {
      transform: scale(1);
    }
  }
`;

/* overlay – viktig: venstre mørkere */
export const Overlay = styled.div`
  position: absolute;
  inset: 0;

  background:
    radial-gradient(
      900px 500px at 20% 30%,
      rgba(255, 255, 255, 0.1),
      transparent 55%
    ),
    linear-gradient(
      90deg,
      rgba(11, 18, 32, 0.78) 0%,
      rgba(11, 18, 32, 0.48) 38%,
      rgba(11, 18, 32, 0.12) 70%,
      rgba(11, 18, 32, 0.02) 100%
    );
`;

/* tekstområde */
export const HeroContent = styled.div`
  position: relative;
  z-index: 2;

  max-width: 1200px;
  height: 100%;

  margin: 0 auto;
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  /* venstre-alignment */
  align-items: flex-start;
`;

export const HeroTitle = styled.h1`
  margin: 0;
  max-width: 720px;

  font-size: clamp(2.2rem, 4.6vw, 3.6rem);
  line-height: 1.08;
  letter-spacing: -0.02em;

  color: rgba(255, 255, 255, 0.96);

  /* litt “premium” */
  text-shadow: 0 8px 26px rgba(0, 0, 0, 0.35);
`;

export const HeroSubtitle = styled.p`
  margin: 0;
  max-width: 560px;

  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.72);
`;

export const CTA = styled(Link)`
  margin-top: 10px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 12px 18px;
  border-radius: 12px;

  text-decoration: none;
  color: white;
  font-weight: 600;

  background: rgba(59, 130, 246, 0.95);
  box-shadow: 0 12px 26px rgba(59, 130, 246, 0.25);

  transition:
    transform 180ms ease,
    filter 180ms ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.05);
  }
`;

/* (Beholder AboutBanner fra din opprinnelige) */
export const AboutBanner = styled.img`
  left: 0px;
  top: 0;
  width: 100%;
  height: 24rem;
  object-fit: cover;
  object-position: top;
  animation: ${IntroAnimation} 0.6s ease-in-out;

  @media (max-width: 2000px) {
    height: 21rem;
  }

  @media (max-width: 1500px) {
    height: 15rem;
  }

  @media (max-width: 1000px) {
    height: 12rem;
  }

  @media (max-width: 500px) {
    height: 7rem;
  }
`;

/* Du kan beholde Slogan/PageTitle hvis du bruker de andre steder,
   men heroen bruker nå HeroTitle/HeroSubtitle/CTA */
export const Slogan = styled.h1`
  display: none;
`;

export const PageTitle = styled.h1`
  display: none;
`;
