import styled from "styled-components";
import { paddings, margins, colors, breakpoints } from "../utils/design-system";

export const StyledApp = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const StyledHeader = styled.header`
  min-height: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 ${paddings.lg}px;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.gray05};

  h1 {
    color: ${colors.gray01};
    margin: 0;
    font-size: 24px;
  }

  @media (max-width: ${breakpoints.sm}px) { 
    padding: 0 ${paddings.md}px;
  }
`;

export const StyledContent = styled.section`
  box-sizing: border-box;
  flex-grow: 1;
  background-color: ${colors.gray07};
  padding: ${paddings.lg}px;
  overflow: auto;

  h2 {
    color: ${colors.gray01};
    margin: 0 0 ${margins.xl}px 0;
    font-size: 20px;
  }

  @media (max-width: ${breakpoints.sm}px) { 
    padding: ${paddings.md}px;
  }
`;
