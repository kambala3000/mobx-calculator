import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

// components
import Display from './Display';
import ActionButton from './ActionButton';

// constants
import { OPERATIONS } from '../utils/constants';

@inject('calculationsStore')
@observer
class Calculator extends Component {
  handleButtonPress = symbol => {
    const {
      addToCurrent,
      resetCurrent,
      resetAll,
      changeSign,
      createDecimal
    } = this.props.calculationsStore;

    const { FULL_RESET, RESET, CHANGE_SIGN, DECIMAL } = OPERATIONS;

    if (Number.isInteger(symbol)) return addToCurrent(symbol);

    switch (symbol) {
      case FULL_RESET:
        resetAll();
        break;
      case RESET:
        resetCurrent();
        break;
      case CHANGE_SIGN:
        changeSign();
        break;
      case DECIMAL:
        createDecimal();
        break;
      default:
        break;
    }
  };

  render() {
    const { currentValue } = this.props.calculationsStore;

    const {
      FULL_RESET,
      RESET,
      CHANGE_SIGN,
      PERCENTAGE,
      DIVIDE,
      MULTIPLY,
      MINUS,
      PLUS,
      EQUALLY,
      DECIMAL
    } = OPERATIONS;

    const resetBtnTitle = Math.abs(currentValue) === 0 ? FULL_RESET : RESET;

    return (
      <SCCalculatorBase>
        <Display currentValue={currentValue} />
        <SCButtonsWrapp>
          <ActionButton
            displayedSymbol={resetBtnTitle}
            actionMethod={this.handleButtonPress}
          />
          <ActionButton
            displayedSymbol={CHANGE_SIGN}
            actionMethod={this.handleButtonPress}
          />
          <ActionButton
            displayedSymbol={PERCENTAGE}
            fontSize="28px"
            actionMethod={this.handleButtonPress}
          />
          <ActionButton
            displayedSymbol={DIVIDE}
            fontSize="40px"
            isOrange
            actionMethod={this.handleButtonPress}
          />
          <ActionButton
            displayedSymbol={7}
            actionMethod={this.handleButtonPress}
          />
          <ActionButton
            displayedSymbol={8}
            actionMethod={this.handleButtonPress}
          />
          <ActionButton
            displayedSymbol={9}
            actionMethod={this.handleButtonPress}
          />
          <ActionButton
            displayedSymbol={MULTIPLY}
            actionMethod={this.handleButtonPress}
            isOrange
          />
          <ActionButton
            displayedSymbol={4}
            actionMethod={this.handleButtonPress}
          />
          <ActionButton
            displayedSymbol={5}
            actionMethod={this.handleButtonPress}
          />
          <ActionButton
            displayedSymbol={6}
            actionMethod={this.handleButtonPress}
          />
          <ActionButton
            displayedSymbol={MINUS}
            actionMethod={this.handleButtonPress}
            isOrange
          />
          <ActionButton
            displayedSymbol={1}
            actionMethod={this.handleButtonPress}
          />
          <ActionButton
            displayedSymbol={2}
            actionMethod={this.handleButtonPress}
          />
          <ActionButton
            displayedSymbol={3}
            actionMethod={this.handleButtonPress}
          />
          <ActionButton
            displayedSymbol={PLUS}
            actionMethod={this.handleButtonPress}
            isOrange
          />
          <ActionButton
            displayedSymbol={0}
            actionMethod={this.handleButtonPress}
            borderRadiusPosition="bottom-left"
            isDoubled
            alignFromStart
          />
          <ActionButton
            displayedSymbol={DECIMAL}
            actionMethod={this.handleButtonPress}
          />
          <ActionButton
            displayedSymbol={EQUALLY}
            actionMethod={this.handleButtonPress}
            borderRadiusPosition="bottom-right"
            isOrange
          />
        </SCButtonsWrapp>
      </SCCalculatorBase>
    );
  }
}

const SCCalculatorBase = styled.div`
  width: 340px;
  border-radius: 8px;
  border: 1px solid #8a8a8a;
  box-shadow: 0px 43px 111px -10px rgba(0, 0, 0, 0.36);
`;

const SCButtonsWrapp = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default Calculator;
