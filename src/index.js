import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'mobx-react';

// stores
import calculations from './stores/calculations';

// styles
import './globalStyles';

// utils
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(
  <Provider calculationsStore={calculations}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
