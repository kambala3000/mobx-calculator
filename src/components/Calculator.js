import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

// components
import Display from './Display';
import ActionButton from './ActionButton';

@inject('calculationsStore')
@observer
class Calculator extends Component {
  render() {
    const {
      currentValue,
      addToCurrent,
      resetCurrent
    } = this.props.calculationsStore;

    return (
      <SCCalculatorBase>
        <Display currentValue={currentValue} />
        <SCButtonsWrapp>
          <ActionButton displayedSymbol="AC" actionMethod={resetCurrent} />
          <ActionButton displayedSymbol="+/-" />
          <ActionButton displayedSymbol="%" fontSize="28px" />
          <ActionButton displayedSymbol="÷" fontSize="40px" isOrange />
          <ActionButton
            displayedSymbol="7"
            displayedValueHandler={addToCurrent}
          />
          <ActionButton
            displayedSymbol="8"
            displayedValueHandler={addToCurrent}
          />
          <ActionButton
            displayedSymbol="9"
            displayedValueHandler={addToCurrent}
          />
          <ActionButton displayedSymbol="×" isOrange />
          <ActionButton
            displayedSymbol="4"
            displayedValueHandler={addToCurrent}
          />
          <ActionButton
            displayedSymbol="5"
            displayedValueHandler={addToCurrent}
          />
          <ActionButton
            displayedSymbol="6"
            displayedValueHandler={addToCurrent}
          />
          <ActionButton displayedSymbol="—" isOrange />
          <ActionButton
            displayedSymbol="1"
            displayedValueHandler={addToCurrent}
          />
          <ActionButton
            displayedSymbol="2"
            displayedValueHandler={addToCurrent}
          />
          <ActionButton
            displayedSymbol="3"
            displayedValueHandler={addToCurrent}
          />
          <ActionButton displayedSymbol="+" isOrange />
          <ActionButton
            displayedSymbol="0"
            borderRadiusPosition="bottom-left"
            isDoubled
            alignFromStart
          />
          <ActionButton displayedSymbol="," />
          <ActionButton
            displayedSymbol="="
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
