import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>
    },
    {
        path: '/news',
        element: <h2>News Layout</h2>
    },
    {
        path: 'auth',
        element: <h2>Login</h2>
    },
    {
        path: '*',
        element: <h1>Error</h1>
    }
])

export default router;