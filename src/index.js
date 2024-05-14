import React from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = <h1>Hello React!</h1>

// createRoot is better used in React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);