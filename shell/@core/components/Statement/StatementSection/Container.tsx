'use client';

import styled from 'styled-components';

export default styled.div`
  background-color: #FFFFFF;

  & > h6 {
    color: #47A138;
    font-weight: 700;
    text-transform: capitalize;
  }

  .statement-item {
    margin-bottom: 15px;
  }

  .statement-item:last-child .row .col:first-child {
    border-bottom: none;
  }
`;
