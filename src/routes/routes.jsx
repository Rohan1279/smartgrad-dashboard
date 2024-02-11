import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Pages/Dashboard/Profile/Profile";
import UniversityDashboard from "../Pages/Dashboard/UniversityDashboard/UniversityDashboard";
import CareerDashboard from "../Pages/Dashboard/CareerDashboard/CareerDashboard";
import AptitudeDashboard from "../Pages/Dashboard/AptitudeDashboard/AptitudeDashboard";
import NetworkDashboard from "../Pages/Dashboard/NetworkDashboard/NetworkDashboard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import ErrorPage from "@/Shared/ErrorPage/ErrorPage";
import Home from "@/Pages/Home/Home";
import ApplicatonDetailPage from "@/Pages/Dashboard/UniversityDashboard/ApplicationTab/ApplicatonDetailPage";
import AboutUs from "@/Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   errorElement: <ErrorPage />,
  //   element: <Main />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <Home />,
  //     },
  //     {
  //       path: "/login",
  //       element: <Login />,
  //     },
  //     {
  //       path: "/register",
  //       element: <Register />,
  //     },
  //   ],
  // },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,

    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "home",
        element: <DashboardHome />,
      },
      {
        path: "profile/:id",
        element: <Profile />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "university",
        element: <UniversityDashboard />,
      },
      {
        path: "career",
        element: <CareerDashboard />,
      },
      {
        path: "aptitude",
        element: <AptitudeDashboard />,
      },
      {
        path: "network",
        element: <NetworkDashboard />,
      },
    ],
  },
  {
    path: "/*",
    element: <AboutUs />,
  },
]);
export default router;
