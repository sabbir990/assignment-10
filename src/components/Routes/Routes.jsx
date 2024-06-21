import { createBrowserRouter } from 'react-router-dom'
import Root from '../Root/Root'
import ErrorPage from '../ErrorPage/ErrorPage'
import Home from '../Home/Home'
import LoginPage from '../Login/LoginPage'
import RegisterPage from '../Register/RegisterPage'
import AddSpot from '../Add Tourist Spot/AddSpot'
import PrivateRoute from '../Private Route/PrivateRoute'

const route = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/register',
                element: <RegisterPage />
            },
            {
                path: '/addSpot',
                element: <PrivateRoute>
                    <AddSpot />
                </PrivateRoute>
            }
        ]
    }
])

export default route