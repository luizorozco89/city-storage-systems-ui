import styled from 'styled-components';

const StyledOrdersTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-bottom: 1px solid rgb(212, 215, 220);
  border-spacing: 0px;
  border-collapse: collapse;
  text-align: left;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 200px;

  thead {
    border-bottom: 3px solid lightgray;
  }

  th, td {
    padding: 12px;
  }
`;

export default StyledOrdersTable;