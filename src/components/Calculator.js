import React, { Component } from 'react';
import { inject } from 'mobx-react';

@inject('calculationsStore')
class Calculator extends Component {
  render() {
    return <div>calculator</div>;
  }
}

export default Calculator;
