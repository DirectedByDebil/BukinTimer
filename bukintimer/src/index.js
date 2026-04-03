import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setEventTargetBehavior } from './utils/eventUtils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//set modules
const modules = ['Timer', 'Quotes', 'Music', 'Visual'];
const modulesRefs =[]

for (const module of modules) {
  window[module] ??= {};
  modulesRefs.push(window[module]);
}

setEventTargetBehavior(...modulesRefs);