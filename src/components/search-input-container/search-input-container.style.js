import styled from 'styled-components';
import { paddings, margins, colors } from '../../utils/design-system';

const StyledInputContainer = styled.div`
  margin-bottom: ${margins.lg}px;

  #search-text, #matches-text {
    font-weight: 600;
    margin-right: ${margins.xs}px;
    padding: ${paddings.xs}px 0;
    font-size: 16px;
    color: ${colors.gray01};
  }

  #matches-text {
    display: inline-block;
    font-size: 16px;
    
    #matches-number {
      color: ${colors.blue03};
    }
  }
  
  #search-input {
    width: 130px;
    padding: ${paddings.xs}px;
    font-size: 16px;
    border-radius: 7px;
    font-weight: 600;
    margin-right: ${margins.xs}px;
    outline: none;
    border: 1px solid ${colors.gray04};
    color: ${colors.blue03};

    &:focus {
      border: 1px solid ${colors.blue02};
    }
  }
`;

export default StyledInputContainer;