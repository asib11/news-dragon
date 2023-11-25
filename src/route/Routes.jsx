import { Navigate, createBrowserRouter, } from "react-router-dom";
import Main from "../layouts/Main";
// import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import News from "../pages/news/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Home/Shared/Login/Login";
import Register from "../pages/Home/Shared/Login/Register";
import NewsLayout from "../layouts/NewsLayout";

const router = createBrowserRouter([
    {
        path:'/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/catagory/0'></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'category',
        element: <Category></Category>,
        children:[
            // {
            //     path: '/',
            //     element: <Category></Category>,
            //     loader: () =>  fetch(`http://localhost:5000/news`)
            // },
            {
                path: ':id',
                element:<Category></Category>,
                loader :({params})=>fetch( `http://localhost:5000/categories/${params.id}`)
            },
        ]
    },
    {
        path:'/news',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path: ':id',
                element:<News></News>,
                loader:({params}) =>  fetch(`http://localhost:5000/news/${params.id}`),
            },
        ]
    }
])

export default router;