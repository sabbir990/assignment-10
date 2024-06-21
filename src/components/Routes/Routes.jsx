import { createBrowserRouter } from 'react-router-dom'
import Root from '../Root/Root'
import ErrorPage from '../ErrorPage/ErrorPage'
import Home from '../Home/Home'

const route = createBrowserRouter([
    {
        path : '/',
        element : <Root />,
        errorElement : <ErrorPage />,
        children : [
            {
                path : '/',
                element : <Home />
            }
        ]
    }
])

export default route