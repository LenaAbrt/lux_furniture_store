import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes} from "react-router-dom";
import {CartProvider} from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CartProvider>
            <BrowserRouter>
                {/*<Routes>*/}
                <App/>
                {/*</Routes>*/}
            </BrowserRouter>
        </CartProvider>
    </React.StrictMode>
);

