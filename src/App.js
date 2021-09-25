import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './GlobalStyles';
import { Footer, Navbar } from './components';
import Home from './pages/HomePage/Home';


function App() {

    return (
        <div className="App">
            <Router> 
                <GlobalStyle />
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
