import React, { useContext } from 'react'
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth Provider/AuthProvider';

export default function LoginPage() {
    const {loginUser, googleLogin, facebookLogin, setUser} = useContext(AuthContext);

    const handleLoginSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password).then(result => {
            setUser(result.user)
        })
    }

    const handleGoogleLogin = () => {
        googleLogin().then(result => {
            setUser(result.user)
        })
    }

    const handleFacebookLogin = () => {
        facebookLogin().then(result => {
            setUser(result.user)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pt-8">
                        <h1 className='font-playWrite text-4xl text-center underline'>Login Now</h1>
                        <form className="card-body font-playWrite" onSubmit={handleLoginSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Enter your password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <hr />
                        <div className='card-body'>
                            <button className='btn btn-outline hover:btn-accent' onClick={handleGoogleLogin}>Log In With <FaGoogle /></button>
                            <button className='btn btn-outline hover:btn-primary' onClick={handleFacebookLogin}>Log In With <FaFacebook /></button>
                            <p className='font-bold'>Don't have any account? <Link className='underline text-[#1282e3]' to={'/register'}>Register Now</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
