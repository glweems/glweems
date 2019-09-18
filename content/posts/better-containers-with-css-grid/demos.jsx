import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: pink;
  h1 {
    color: #f8d58c;
  }
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 5em;
    color: darken(#d0c1fa, 40%);
    font-weight: bold;
    text-align: center;
    background: #d0c1fa;
    border-radius: 1em;
    p {
      opacity: 0.6;
    }
  }
`;

export const DemoOne = () => <Wrapper>div</Wrapper>;
