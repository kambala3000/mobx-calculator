import { injectGlobal } from 'styled-components';

injectGlobal`
  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body, p {
    margin: 0;
    padding: 0;
  }
`;
