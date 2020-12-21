import styled from "styled-components";
import { margins, colors, breakpoints } from "../../utils/design-system";

const StyledOrderRow = styled.tr`
  border-bottom: 1px solid ${colors.gray06};

  label {
    display: none;
  }

  .price {
    font-weight: 600;
    color: ${colors.blue03};
  }

  @media (max-width: ${breakpoints.sm}px) { 
    label {
      display: block;
      margin-bottom: ${margins.xs}px;
      color: ${colors.gray01};
      font-weight: 600;
    }
  }
`;

export default StyledOrderRow;
