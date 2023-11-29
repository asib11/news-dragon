import { Navigate, createBrowserRouter, } from "react-router-dom";

// import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import News from "../pages/news/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Home/Shared/Login/Login";
import Register from "../pages/Home/Shared/Login/Register";
import NewsLayout from "../layouts/NewsLayout";
import Main from "../layouts/Main";
import PrivateRoutes from "./PrivateRoutes";
import Terms from "../pages/Terms/Terms";

const router = createBrowserRouter([
    {
        path:'/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'terms',
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children:[
            // {
            //     path: '/',
            //     element: <Category></Category>,
            //     loader: () =>  fetch(`http://localhost:5000/news`)
            // },
            {
                path: ':id',
                element:<Category></Category>,
                loader :({params})=>fetch( `https://news-dragon-server-n3ro3vfk6-asib-ahmeds-projects.vercel.app/categories/${params.id}`)
            },
        ]
    },
    {
        path:'/news',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path: ':id',
                element:<PrivateRoutes><News></News></PrivateRoutes>,
                loader:({params}) =>  fetch(`https://news-dragon-server-n3ro3vfk6-asib-ahmeds-projects.vercel.app/news/${params.id}`),
            },
        ]
    }
])

export default router;