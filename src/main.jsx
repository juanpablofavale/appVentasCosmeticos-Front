import ReactDOM from 'react-dom/client'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './pages/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Tienda from './pages/Tienda'
import Contacto from './pages/Contacto'
import Productos from './pages/Productos.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"tienda",
                element: <Tienda />
            },
            {
                path:"productos",
                element: <Productos />
            },
            {
                path:"contacto",
                element: <Contacto />
            },
        ]
    },
    {
        path: "*",
        element: <Navigate to="/" />
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
