import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
    <BrowserRouter basename='4p22-final-project-ilya-popov'>
        <App />
    </BrowserRouter>
);
=======
    <Provider store={store}>
        <BrowserRouter basename='4p22-final-project-ilya-popov'>
            <App />
        </BrowserRouter>
    </Provider>
);
>>>>>>> 8dd84c2e092a9847d708ed1007a82ccb580f8488
