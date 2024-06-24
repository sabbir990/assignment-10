import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Auth Provider/AuthProvider'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <p>Loading .....</p>
    }
    if (user) {
        return children
    } else {
        return <Navigate to={'/login'} state={location.pathname} />
    }
}
