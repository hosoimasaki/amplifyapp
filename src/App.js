import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//screens
import Default from './screens/Default';
import Login from './screens/Login';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route path="/" component={Default} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
