import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllVehicles from "../pages/AllVehicles";
import AddVehicle from "../pages/AddVehicle";
import MyVehicles from "../pages/MyVehicles";
import MyBookings from "../pages/MyBookings";
import ProductDetails from "../pages/ProductDetails";
import UpdateForm from "../pages/UpdateForm";

import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Explore from "../components/Explore";
import About from "../components/About";
import Contact from "../components/Contact";
import DashboardLayout from "../dashboard/DashboardLayout";
import DashboardHome from "../dashboard/DashboardHome";
import DashboardProfile from "../dashboard/DashboardProfile";
import ManageVehicles from "../dashboard/ManageVehicles";
import UsersList from "../dashboard/UsersList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/allVehicles",
        element: <AllVehicles />
      },
      {
          path: "/explore",
          element: <Explore />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },



      {
        path: "/addVehicles",
        element: <PrivateRoute><AddVehicle /></PrivateRoute>
      },
      {
        path: "/myVehicles",
        element: <PrivateRoute><MyVehicles /></PrivateRoute>
      },
      {
        path: "/myBooking",
        element: <PrivateRoute><MyBookings /></PrivateRoute>
      },
      {
        path: "/product/:id",
        element: <ProductDetails />
      },
      {
        path: "/editProduct/:id",
        element: <PrivateRoute><UpdateForm /></PrivateRoute>
      },
      {
        path: "/signin",
        element: <Signin />
      },
      {
        path: "/signup",
        element: <Signup />
      }
    ]
  },


  {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
          { index: true, element: <DashboardHome /> }, 
          { path: "profile", element: <DashboardProfile /> },
         
          { path: "users", element: <UsersList /> } 
        ]
      }
    
  
]);
