import styled from "styled-components";

export const FooterWrap = styled.footer`
  background: #ffffff;
  border-top: 1px solid #e8ecf2;
  color: #2b2b2b;
`;

export const TopRow = styled.div`
  padding: 28px 0 26px;
`;

export const Title = styled.h4`
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #6b7280;
  margin-bottom: 14px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
`;

export const ListItem = styled.li``;

export const FooterLink = styled.a`
  display: inline-flex;
  gap: 10px;
  align-items: center;

  text-decoration: none;
  color: #374151;

  padding: 6px 8px;
  border-radius: 8px;

  transition:
    background 0.18s ease,
    transform 0.18s ease;

  &:hover {
    background: #f3f4f6;
    transform: translateY(-1px);
  }
`;

export const BadgeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Badge = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;
  min-height: 90px;

  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;

  img {
    max-width: 100%;
    max-height: 60px;
    object-fit: contain;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 10px;
`;

export const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 10px 14px;
  border-radius: 999px;

  background: #f3f4f6;
  border: 1px solid #e5e7eb;

  text-decoration: none;
  color: #374151;

  transition:
    transform 0.18s ease,
    background 0.18s ease;

  &:hover {
    background: #e5e7eb;
    transform: translateY(-1px);
  }

  svg {
    font-size: 1.2rem;
  }
`;

export const MicroText = styled.p`
  margin-top: 10px;
  color: #6b7280;
  font-size: 0.9rem;
  max-width: 35ch;
`;

export const BottomBar = styled.div`
  border-top: 1px solid #e5e7eb;
  padding: 14px 0;
`;

export const BottomText = styled.p`
  margin: 0;
  color: #6b7280;
  font-size: 0.9rem;
`;

export const BottomLink = styled.a`
  text-decoration: none;
  color: #4b5563;
  font-size: 0.9rem;

  padding: 4px 6px;
  border-radius: 6px;

  transition: background 0.18s ease;

  &:hover {
    background: #f3f4f6;
  }
`;
