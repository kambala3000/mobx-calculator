import { observable, action } from 'mobx';

class Calculations {
  @observable accumulator = 0;
  @observable currentValue = '0';
  @observable currentOperation = '';
  // @observable isOperationPressed = false;

  @action.bound
  addToCurrent(val) {
    if (this.currentValue === '0') {
      return (this.currentValue = `${val}`);
    } else if (this.currentValue === '-0') {
      return (this.currentValue = `-${val}`);
    }

    this.currentValue = `${this.currentValue}${val}`;
  }

  @action.bound
  resetCurrent() {
    this.currentValue = '0';
  }

  @action.bound
  resetAll() {
    this.accumulator = 0;
    this.currentValue = '0';
    this.currentOperation = '';
  }

  @action.bound
  changeSign() {
    if (this.currentValue === '0') return (this.currentValue = '-0');

    this.currentValue = `${-this.currentValue}`;
  }

  @action.bound
  createDecimal() {
    const isAlreadyDecimal = this.currentValue.indexOf('.') > -1;

    if (!isAlreadyDecimal) this.currentValue = `${this.currentValue}.`;
  }
}

export default new Calculations();
