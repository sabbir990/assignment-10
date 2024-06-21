import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Auth Provider/AuthProvider'
import Swal from 'sweetalert2';

export default function RegisterPage() {
    const { createUser, user } = useContext(AuthContext);
    console.log(user)

    const handleRegisterSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!password.length > 5) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password should be at least 6 characters",
            });
            return;
        }
        if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must have a Uppercase letter",
            });
            return;
        }
        if (!/[a-z]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must have a lowercase letter",
            });
            return;
        }

        createUser(email, password).then(result => {
            if (result.user) {
                Swal.fire({
                    title: "Done!",
                    text: "User created successfully",
                    icon: "success"
                });
            }
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pt-8 text-center">
                        <h1 className='font-bold font-playWrite underline text-4xl'>Register Now</h1>
                        <form className="card-body font-playWrite font-bold" onSubmit={handleRegisterSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="Enter your photoURL" name='photo' className="input input-bordered" required />
                            </div>
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
                                <input type="password" placeholder="Create a password" name='password' className="input input-bordered" required />
                            </div>
                            <p className='font-bold'>Already have an account? <Link to={'/login'} className='text-[#1282e3] underline'>Login Now</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
