import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../Auth Provider/AuthProvider'


export default function Navbar() {
    const {logOut, user, setUser} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut().then(result => {
            setUser(result?.user)
        })
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='font-playWrite'><NavLink to={'/'}>Home</NavLink></li>
                            <li className='font-playWrite'><a>All Tourist Spot</a></li>
                            <li className='font-playWrite'><a>Add Tourist Spot</a></li>
                            <li className='font-playWrite'><a>My List</a></li>
                            <li className='font-playWrite'><a>Login</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-playWrite">TM-Website</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-playWrite'><NavLink to={'/'}>Home</NavLink></li>
                        <li className='font-playWrite'><a>All Tourist Spot</a></li>
                        <li className='font-playWrite'><a>Add Tourist Spot</a></li>
                        <li className='font-playWrite'><a>My List</a></li>
                        <li className='font-playWrite'><NavLink to={'/login'}>Login</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end pr-4">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user && user.photoURL ? user.photoURL : "https://d20k9hx8rfk4nk.cloudfront.net/images/avatar.png"} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-80">
                            <p className='underline font-bold font-playWrite text-center'>{user?.email}</p>
                            {user ? <li className='font-playWrite mt-4'><button onClick={handleLogOut}>Logout</button></li> : <li className='font-playWrite mt-4'><Link to={'/login'}>Login</Link></li>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
