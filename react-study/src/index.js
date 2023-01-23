import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './실습_JSX코드작성/Library';
import ConfirmDialog from './실습_Element알아보기/ConfirmDialog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
    <ConfirmDialog/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
