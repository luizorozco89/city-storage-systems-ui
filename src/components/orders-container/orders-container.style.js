import styled from 'styled-components';
import { margins, paddings, colors, breakpoints } from '../../utils/design-system';

const StyledOrdersContainer = styled.div`
  background: ${colors.white};
  padding: ${paddings.md}px;
  border-radius: 4px;
  border: 1px solid ${colors.gray06};

  table {
    width: 100%;
    table-layout: fixed;
    border-spacing: 0px;
    border-collapse: collapse;
    text-align: left;

    thead {
      border-bottom: 2px solid ${colors.gray06};
    }

    th, td {
      color: ${colors.gray01};
      padding: ${paddings.xs}px;
    }
  }

  @media (max-width: ${breakpoints.sm}px) {
    background: transparent;
    border: none;
    padding: 0;

    table {
      tr {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: ${margins.md}px;
        background: ${colors.white};
        padding: ${paddings.xs}px;
        box-sizing: border-box;
        border-radius: 4px;
        border: 1px solid ${colors.gray06};
      }

      thead {
        tr {
          display: none;
        }
      }
    }
  }
`;

export default StyledOrdersContainer;