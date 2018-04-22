import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Display = ({ currentValue }) => {
  return (
    <SCDisplayWrapp>
      <SCValue>{currentValue}</SCValue>
    </SCDisplayWrapp>
  );
};

Display.propTypes = {
  currentValue: PropTypes.string.isRequired
};

const SCDisplayWrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px 20px;
  background-color: #4c4c4c;
  height: 90px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const SCValue = styled.div`
  font: 300 64px/1 'Lato', sans-serif;
  text-align: right;
  color: #fff;
`;

export default Display;
