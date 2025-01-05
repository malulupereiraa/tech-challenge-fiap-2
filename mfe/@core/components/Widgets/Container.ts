'use client';

import styled from 'styled-components';

export default styled.section`
  background-color: #FFFFFF;
  padding: 30px;
  border-radius: 12px;
  min-width: 315px;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    h3 {
      font-weight: 700;
      margin: 0px;
    }

    .actions {
      margin-left: auto;

      button {
        margin-left: 12px;
      }
    }
  }

  .section-placeholder .section-item-placeholder:first-child {
    margin-bottom: 21px;
  }
`;
