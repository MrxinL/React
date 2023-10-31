import { Children } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Login from '../pages/login/index'
import Layout from '../pages/main/index'

const routers = [
    {
        path: '/',
        element: <Navigate to="/login" />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/main',
        element: <Layout />,
        children: [
            {
                path: 'index',
                element: <Login />
            }
        ]
    }
]


export const Router = () => {
    const routes = useRoutes(routers)
    return routes
}

