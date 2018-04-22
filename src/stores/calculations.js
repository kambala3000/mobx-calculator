import { observable, action } from 'mobx';

class Calculations {
  @observable accumulator = 0;
  @observable currentValue = '0';
  @observable currentOperation = '';

  @action.bound
  addToCurrent(val) {
    if (this.currentValue === '0') return (this.currentValue = val);

    this.currentValue = `${this.currentValue}${val}`;
  }

  @action.bound
  resetCurrent() {
    this.currentValue = '0';
  }
}

export default new Calculations();
