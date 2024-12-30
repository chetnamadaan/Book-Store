import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from '../App'; 
  import Home from "../home/Home";
  import Shop from "../shop/Shop";
  import About from "../components/About";
  import Blog from '../components/Blog';
  import SingleBook from "../shop/SingleBook";
  import DashboardLayout from "../dashboard/DashboardLayout";
  import Dashboard from "../dashboard/Dashboard";
  
  import UploadBook from "../dashboard/UploadBook";

  import Managebooks from "../dashboard/Managebooks";
  import EditBooks from "../dashboard/EditBooks";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path:'/',
            element: <Home/>
        },
        {
          path:'/shop',
          element: <Shop/>
        },{
          path:"/about",
          element: <About/>
        },{
          path:"/blog",
          element: <Blog/>
        },
        {
          path:"/book/:id",
          element: <SingleBook/>,
          loader: ({ params }) => {
            console.log("Fetching data for book ID:", params.id); 
            return fetch(`http://localhost:5000/book/${params.id}`)
                .then(response => response.json())
                .then(data => {
                    console.log("Fetched data:", data); 
                    return data;
                });
        }
        }
       
      ]
    },
    {
      path: "/admin/dashboard",
      element:<DashboardLayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element:<Dashboard/>
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBook/>
        },
        {
          path:"/admin/dashboard/manage",
          element:<Managebooks/>
        },
        {
          path:"/admin/dashboard/edit-books/:id",
          element:<EditBooks/>,
          loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)        
        },

      ]
    }
  ]);
  export default router;
 


