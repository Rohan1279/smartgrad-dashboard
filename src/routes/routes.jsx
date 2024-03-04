import AboutUs from "@/Pages/AboutUs/AboutUs";
import Home from "@/Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AptitudeDashboard from "../Pages/Dashboard/AptitudeDashboard/AptitudeDashboard";
import CareerDashboard from "../Pages/Dashboard/CareerDashboard/CareerDashboard";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import NetworkDashboard from "../Pages/Dashboard/NetworkDashboard/NetworkDashboard";
import Profile from "../Pages/Dashboard/Profile/Profile";
import UniversityDashboard from "../Pages/Dashboard/UniversityDashboard/UniversityDashboard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    // errorElement: <ErrorPage />,
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
        path: "university/recommendation",
        element: <UniversityDashboard />,
      },
      {
        path: "university/recommendation/:id",
        element: <UniversityDashboard />,
      },
      {
        path: "university/applications",
        element: <UniversityDashboard />,
      },
      {
        path: "university/applications/:id",
        element: <UniversityDashboard />,
      },
      {
        path: "career/jobs",
        element: <CareerDashboard />,
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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/*",
    element: <AboutUs />,
  },
]);
export default router;
