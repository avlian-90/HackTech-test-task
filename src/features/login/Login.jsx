import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserEmail, setUserPassword, loginAsync, resetForm } from './loginSlice';
import './Login.module.css';

const Login = () => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.login)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAsync(user));
        if(localStorage.getItem("access-token")) {
            dispatch(resetForm())
            navigate("/home");
        }
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={user.email} onChange={(e) => dispatch(setUserEmail(e.target.value))} />
                <input type="password" placeholder="Password" value={user.password} onChange={(e) => dispatch(setUserPassword(e.target.value))} />
                <button type="submit">Login</button>
            </form>
        </main>
    )
}

export default Login;