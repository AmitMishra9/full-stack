import './App.scss';
import Header from './components/Header/Header';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from './container/Login/Login';
import Registration from './container/Registration/Registration';
import Home from "./container/Home/Home"
import NewBlog from './container/NewBlog/NewBlog';
import Layout from './container/layout/Layout';
const routesconfig=[
  {
    path:"/",
    element:<Login />
  },
  {
     path:"/register",
      element:<Registration/>
  },
  {
    path:"/home",
    element:<Home/>
  }
  ,{
    path:"/blog-details/:id",
    element:<h1>Blog Details</h1>
  },
  {
    path:"/create-blog",
    element:<NewBlog/>, 
  }
  
].map(route=>(
  {...route,element:<Layout>{route.element}</Layout>
}
))

//console.log(routesconfig)

const routes=createBrowserRouter(routesconfig);

function App() {
  return (
    <div className="">
    {/*<Header/>*/}
         
         <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
