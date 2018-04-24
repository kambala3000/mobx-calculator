import { observable, action } from 'mobx';
import { CALC_METHODS, MAX_NUMS } from '../utils/constants';

class Calculations {
  @observable accumulator = 0;
  @observable currentValue = '0';
  @observable currentOperation = '';
  @observable isClearNext = false;

  @action.bound
  addToCurrent(val) {
    if (this.currentValue.length === MAX_NUMS) return;

    const isValueInfinite = this.checkForInfinity();

    if (this.isClearNext || isValueInfinite) {
      this.currentValue = `${val}`;
      this.isClearNext = false;
      return;
    }

    if (this.currentValue === '0') {
      this.currentValue = `${val}`;
      return;
    } else if (this.currentValue === '-0') {
      this.currentValue = `-${val}`;
      return;
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

    if (this.currentValue === '0') {
      this.currentValue = '-0';
      return;
    }

    this.currentValue = `${-this.currentValue}`;
  }

  @action.bound
  createDecimal() {
    const isValueInfinite = this.checkForInfinity();
    if (isValueInfinite) {
      this.currentValue = '0.';
      return;
    }

    const isAlreadyDecimal = this.currentValue.indexOf('.') > -1;

    if (!isAlreadyDecimal) this.currentValue = `${this.currentValue}.`;
  }

  @action.bound
  rememberOperation(opeartionType) {
    if (this.isClearNext) return;

    this.calcTempResult();

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
