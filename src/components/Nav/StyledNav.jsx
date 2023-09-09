import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
  align-self: center;

  @media (max-width: 1000px) {
    font-size: 1.3rem;
    align-self: center;
  }

  @media (max-width: 991px) {
    align-self: baseline;
  }
`;
