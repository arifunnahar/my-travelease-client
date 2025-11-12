import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllVehicles from "../pages/AllVehicles";
import AddVehicle from "../pages/AddVehicle";
import MyVehicles from "../pages/MyVehicles";
import MyBookings from "../pages/MyBookings";
import ProductDetails from "../pages/ProductDetails";

import Signup from "../pages/Signup";

import Signin from "../pages/Signin";
import PrivateRoute from "../privateRoute/PrivateRoute";



export const router = createBrowserRouter([
  {
    path: "/",
        element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
       
    
      },
      {
        path: "/allVehicles",
        element:<AllVehicles/>,
      },
      {
        path: "/addVehicles",
        element: <PrivateRoute><AddVehicle /></PrivateRoute>,
        
      },
      {
        path: "/myVehicles",
        element:<PrivateRoute><MyVehicles/> </PrivateRoute>,
      },
      {
        path: "/myBooking",
        element:<PrivateRoute><MyBookings/></PrivateRoute>,
      },
      {
        path: "/product/:id",
        
        element: <PrivateRoute><ProductDetails/></PrivateRoute>
      },
      {
        path: "/signin",
        element:<Signin/>
      },
      {
        path: "signup",
        element: <Signup/>
      },
      
      

    ]
  },
]);
