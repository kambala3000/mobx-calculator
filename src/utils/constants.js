export const OPERATIONS = {
  FULL_RESET: 'AC',
  RESET: 'C',
  CHANGE_SIGN: '+/-',
  PERCENTAGE: '%',
  DIVIDE: '÷',
  MULTIPLY: '×',
  MINUS: '—',
  PLUS: '+',
  EQUALLY: '=',
  DECIMAL: ','
};

export const CALC_METHODS = {
  DIVIDE: (a, b) => {
    if (+a === 0) return 0;
    return +a * 10 / +b / 10;
  },
  MULTIPLY: (a, b) => +a * 10 * +b / 10,
  MINUS: (a, b) => (+a * 10 - +b * 10) / 10,
  PLUS: (a, b) => (+a * 10 + +b * 10) / 10
};

export const MAX_NUMS = 40;
