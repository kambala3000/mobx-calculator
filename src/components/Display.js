import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Display = ({ currentValue }) => {
  const formattedValue = currentValue.replace('.', ',');

  return (
    <SCDisplayWrapp>
      <SCValue valueLength={formattedValue.length}>{formattedValue}</SCValue>
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
  font-weight: 300;
  font-family: 'Lato', sans-serif;
  line-height: 1;

  font-size: ${({ valueLength }) => {
    if (valueLength < 9) return '64px';
    if (valueLength < 16) return '32px';
    if (valueLength < 30) return '16px';
    return '13px';
  }};

  text-align: right;
  color: #fff;
`;

export default Display;
