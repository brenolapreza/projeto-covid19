import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import Pages
import Home from './pages/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}