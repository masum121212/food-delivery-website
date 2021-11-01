import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.form || '/service';

    const handleGoogleLogin =() => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
    }
    return (
            <div className="container mt-5">
                <div className="col w-50 mx-auto shadow-lg rounded">
                    <h1>Login</h1>
                    <div className="card w-50 mx-auto">
                    <form>
                    <input className="m-3" type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input className="m-3" type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="button" className="btn btn-outline-success m-3" value="submit" />
                    </form>
                    <p><strong>New To Food Panda ? <Link to="/register">Create An Account</Link></strong></p>
                    <div>__________or__________</div>
                    <div>
                    <button onClick={handleGoogleLogin} type="button" className="btn btn-outline-success m-3">Google Sign In</button>
                    </div>
                    </div>
                </div>
            </div>

            



    );
};

export default Login;