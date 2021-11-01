import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="container mt-5">
                <div className="col w-50 mx-auto shadow-lg rounded">
                    <h1>Register : Create Account</h1>
                    <div className="card w-50 mx-auto">
                    <form onSubmit="">
                    <input className="m-3" type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input className="m-3" type="password" name="" id="" placeholder="Your Password"/>
                    <br />
                    <input className="m-3" type="password" name="" id="" placeholder="Re-enter Password"/>
                    <br />
                    <input type="button" className="btn btn-outline-success m-3" value="submit" />
                    </form>
                    <p><strong>Already have an account? <Link to="/login">Login</Link></strong></p>
                    
                    <div>__________or__________</div>
                    <div>
                    <button type="button" className="btn btn-outline-success m-3">Google Sign In</button>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default Register;