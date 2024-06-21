import React from 'react'
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function LoginPage() {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pt-8">
                        <h1 className='font-playWrite text-4xl text-center underline'>Login Now</h1>
                        <form className="card-body font-playWrite">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
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
                            <button className='btn btn-outline hover:btn-accent'>Log In With <FaGoogle /></button>
                            <button className='btn btn-outline hover:btn-primary'>Log In With <FaFacebook /></button>
                            <p className='font-bold'>Don't have any account? <Link className='underline text-[#1282e3]' to={'/register'}>Register Now</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
