import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import jQuery from 'jquery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// Sidebar Toggle 

jQuery(document).on('click', '.wrapper-menu', function() {
  jQuery(this).toggleClass('open');
});

jQuery(document).on('click', ".wrapper-menu", function() {
  jQuery("body").toggleClass("sidebar-main");
});

