import { observable, action } from 'mobx';
import { CALC_METHODS } from '../utils/constants';

class Calculations {
  @observable accumulator = 0;
  @observable currentValue = '0';
  @observable currentOperation = '';
  @observable isClearNext = false;

  @action.bound
  addToCurrent(val) {
    const isValueInfinite = this.checkForInfinity();

    if (this.isClearNext || isValueInfinite) {
      this.currentValue = `${val}`;
      this.isClearNext = false;

      return;
    }

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
    console.log('all reseted');
    this.accumulator = 0;
    this.currentValue = '0';
    this.currentOperation = '';
    this.isClearNext = false;
  }

  @action.bound
  changeSign() {
    const isValueInfinite = this.checkForInfinity();

    if (this.isClearNext || isValueInfinite) {
      this.currentValue = '-0';
      this.isClearNext = false;

      return;
    }

    if (this.currentValue === '0') return (this.currentValue = '-0');

    this.currentValue = `${-this.currentValue}`;
  }

  @action.bound
  createDecimal() {
    const isValueInfinite = this.checkForInfinity();
    if (isValueInfinite) return (this.currentValue = '0.');

    const isAlreadyDecimal = this.currentValue.indexOf('.') > -1;

    if (!isAlreadyDecimal) this.currentValue = `${this.currentValue}.`;
  }

  @action.bound
  rememberOperation(opeartionType) {
    if (this.isClearNext) return;

    this.calcTempResult();
    console.log(opeartionType);

    this.currentOperation = opeartionType;
    this.isClearNext = true;
  }

  @action.bound
  calcTempResult() {
    if (this.currentOperation) {
      const calculatedValue = CALC_METHODS[this.currentOperation](
        this.accumulator,
        this.currentValue
      );
      console.log(calculatedValue);

      this.currentValue = `${calculatedValue}`;
      this.accumulator = calculatedValue;
    } else {
      this.accumulator = this.currentValue;
    }
  }

  @action.bound
  calcFinalResult() {
    if (this.currentOperation) {
      const calculatedValue = CALC_METHODS[this.currentOperation](
        this.accumulator,
        this.currentValue
      );

      this.currentValue = `${calculatedValue}`;
      this.accumulator = 0;
      this.currentOperation = '';
    }
  }

  checkForInfinity() {
    return Math.abs(this.currentValue) === Infinity;
  }
}

export default new Calculations();
