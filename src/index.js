import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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


const currentPage = window.location.pathname;
const menuItems = document.querySelectorAll(".nav link");

menuItems.forEach(item => {
  if (item.getAttribute("href") === currentPage) {
    item.parentElement.classList.add("active"); // Добавляем класс 'active' к li
  }
});