import React from 'react';
import './App.scss';
import Header from './components/header/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import { Provider } from 'react-redux';
import store from './store/index';
import Todo from './components/todo/todo';

function App() {
    return (
        <Provider store={store}>
            <Router basename="/">
                <Header />
                <div className="header-placeholder"></div>
                <Switch>
                    <Route path="/todo" component={Todo} />
                    <Route path="*" component={Home} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
