import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class ActionButton extends Component {
  static propTypes = {
    displayedSymbol: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    actionMethod: PropTypes.func.isRequired,
    borderRadiusPosition: PropTypes.string,
    fontSize: PropTypes.string,
    currentOperation: PropTypes.string,
    opertionType: PropTypes.string,
    isOrange: PropTypes.bool,
    isDoubled: PropTypes.bool,
    alignFromStart: PropTypes.bool,
    isDisabled: PropTypes.bool
  };

  handleClick = () => {
    const { displayedSymbol, actionMethod } = this.props;

    actionMethod(displayedSymbol);
  };

  render() {
    const {
      displayedSymbol,
      borderRadiusPosition,
      fontSize,
      currentOperation,
      opertionType,
      isOrange,
      isDoubled,
      alignFromStart,
      isDisabled
    } = this.props;

    const highlightBorder = opertionType && currentOperation === opertionType;

    return (
      <SCButton
        borderRadiusPosition={borderRadiusPosition}
        fontSize={fontSize}
        isOrange={isOrange}
        isDoubled={isDoubled}
        alignFromStart={alignFromStart}
        onClick={this.handleClick}
        disabled={isDisabled}
        highlightBorder={highlightBorder}
      >
        <span tabIndex="-1">{displayedSymbol}</span>
      </SCButton>
    );
  }
}

const SCButton = styled.button`
  width: ${({ isDoubled }) => (isDoubled ? '170px' : '85px')};
  height: 85px;
  margin: 0;
  padding: 0;
  outline: none;

  font-weight: 400;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '32px')};
  line-height: 1;
  font-family: 'Lato', sans-serif;

  border-width: ${({ highlightBorder }) => (highlightBorder ? '2px' : '1px')};
  border-style: solid;
  border-color: ${({ highlightBorder }) =>
    highlightBorder ? '#1565C0' : '#8a8a8a'};
  ${({ borderRadiusPosition }) =>
    borderRadiusPosition ? `border-${borderRadiusPosition}-radius: 6px` : null};

  background-color: ${({ isOrange }) => (isOrange ? '#FF8E01' : '#E0E0E0')};
  transition: background-color 0.1s linear;
  color: ${({ isOrange }) => (isOrange ? '#fff' : '#212121')};
  cursor: pointer;
  user-select: none;

  &:not(:disabled):active {
    background-color: ${({ isOrange }) => (isOrange ? '#DE7D0F' : '#c2c3c6')};
  }

  &:focus,
  span:focus {
    outline: none;
  }

  span {
    display: flex;
    justify-content: ${({ alignFromStart }) =>
      alignFromStart ? 'flex-start' : 'center'};
    align-items: center;
    width: calc(100% - 68px);
    height: 100%;
    padding: 0 34px;
  }

  &:focus > span {
    background-color: ${({ isOrange }) => (isOrange ? '#DE7D0F' : '#c2c3c6')};
  }
`;

export default ActionButton;
