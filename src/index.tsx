import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider, StyleReset } from 'atomize';

const theme = {
  colors: {
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyleReset />
      {/* <App /> */}
      <h1>Hello</h1>
    </ThemeProvider>
  );
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
