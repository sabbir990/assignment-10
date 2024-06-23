import { createBrowserRouter } from 'react-router-dom'
import Root from '../Root/Root'
import ErrorPage from '../ErrorPage/ErrorPage'
import Home from '../Home/Home'
import LoginPage from '../Login/LoginPage'
import RegisterPage from '../Register/RegisterPage'
import AddSpot from '../Add Tourist Spot/AddSpot'
import PrivateRoute from '../Private Route/PrivateRoute'
import SpotDetails from '../Spot Details/SpotDetails'
import AllSpots from '../All Spots page/AllSpots'
import MyList from '../My list/MyList'
import UpdateSpot from '../Add Tourist Spot/UpdateSpot'

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
            },
            {
                path: '/spotDetails/:id',
                element: <PrivateRoute>
                    <SpotDetails />
                </PrivateRoute>
            },
            {
                path: '/allSpots',
                element: <AllSpots />
            },
            {
                path: '/myList',
                element: <PrivateRoute>
                    <MyList />
                </PrivateRoute>
            },
            {
                path : '/updateSpot/:id',
                element : <UpdateSpot />
            }
        ]
    }
])

export default route