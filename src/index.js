import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Helmet } from 'react-helmet';
// Modular CSS
import "modular-css/css/modular.css";
import "modular-css/css/modular-css.font.css";
import { ModularCSSfonstRequired } from 'modular-css';
// Favicon
import Favicon from './img/isologo.png';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>GraphQL Message App</title>
      <link rel="icon" href={Favicon} />
      <meta name="theme-color" content="#191919" />
      <link href={ModularCSSfonstRequired} rel="stylesheet" />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
