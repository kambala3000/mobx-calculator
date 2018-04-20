import React from 'react';
import styled from 'styled-components';

// components
import Calculator from './Calculator';

const App = () => (
  <SCAppWrapper>
    <Calculator />
  </SCAppWrapper>
);

const SCAppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default App;
