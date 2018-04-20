import { observable } from 'mobx';

class Calculations {
  @observable accumulator = 0;
  @observable currentValue = 0;
  @observable currentOperation = '';
}

export default new Calculations();
