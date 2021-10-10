import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <div>
                <p>Home</p>
                <p><Link to="/">Home</Link></p>
                <p><Link to="/about">About</Link></p>
            </div>
        );
    }
}

export default Login;