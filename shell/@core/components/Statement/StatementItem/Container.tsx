'use client';

import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

export default styled(Container)`
  background: #FFFFFF;
  min-width: 255px;
  margin: 0px;
  padding: 0px;

  h6 {
    margin: 0px;
  }

  .row {
    margin: 0px;
    padding: 0px;
  }

  .row .col {
    padding: 0px;
  }

  .row .col:first-child {
    border-bottom: 1px solid #47A138;
    padding-bottom: 15px;
  }

  .statement-item-title {
    font-weight: 400;
  }

  .statement-item-amount {
    font-weight: 600;
  }

  .statement-item-date {
    color: #8B8B8B;
    text-align: right;
    font-size: 13px;
  }
`;
