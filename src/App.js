import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './GlobalStyles';
import { Navbar } from './components';


function App() {

    return (
        <div className="App">
            <Router> 
                <GlobalStyle />
                <Navbar />
            </Router>
        </div>
    );
};

export default App;
