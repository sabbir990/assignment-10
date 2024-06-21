import { createBrowserRouter } from 'react-router-dom'
import Root from '../Root/Root'
import ErrorPage from '../ErrorPage/ErrorPage'
import Home from '../Home/Home'
import LoginPage from '../Login/LoginPage'

const route = createBrowserRouter([
    {
        path : '/',
        element : <Root />,
        errorElement : <ErrorPage />,
        children : [
            {
                path : '/',
                element : <Home />
            },
            {
                path : '/login',
                element : <LoginPage />
            }
        ]
    }
])

export default route