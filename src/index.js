import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './context/StateProvider';
import { initialState } from './context/initialState';
import reducer from './context/reducer';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Router>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App tab="home" />
        </StateProvider>
    </Router>,
);
