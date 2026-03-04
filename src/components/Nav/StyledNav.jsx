import { NavLink as RouterNavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";

/* navbar container */

export const NavbarWrapper = styled(Navbar)`
  position: sticky;
  top: 0;
  z-index: 1000;

  padding: 14px 0;

  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);

  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

/* nav link */

export const NavLink = styled(RouterNavLink)`
  position: relative;

  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 8px 14px;
  border-radius: 999px;

  text-decoration: none;

  font-weight: 500;
  font-size: 0.95rem;

  color: #374151;

  transition:
    color 0.2s ease,
    transform 0.15s ease;

  svg {
    font-size: 0.9rem;
    opacity: 0.8;
  }

  /* hover background */

  &::before {
    content: "";
    position: absolute;
    inset: 0;

    border-radius: inherit;

    background: rgba(0, 0, 0, 0.06);

    transform: scale(0.85);
    opacity: 0;

    transition:
      transform 0.25s ease,
      opacity 0.25s ease;

    z-index: -1;
  }

  &:hover::before {
    transform: scale(1);
    opacity: 1;
  }

  &:hover {
    color: #111827;
    transform: translateY(-1px);
  }

  /* active state */

  &.active {
    color: #111827;
    font-weight: 600;
  }

  &.active::before {
    opacity: 1;
    transform: scale(1);
    background: rgba(59, 130, 246, 0.15);
  }

  @media (max-width: 991px) {
    font-size: 1.2rem;
    padding: 10px 14px;
  }
`;
