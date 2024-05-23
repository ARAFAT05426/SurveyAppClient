import { createBrowserRouter } from "react-router-dom";
import Main from "../LAYOUTS/Main/Main";
import Home from "../PAGES/HOME/Home";
import About from "../PAGES/About/About";
import Contact from "../PAGES/Contact/Contact";
import LogIn from "../PAGES/LogIn/Login";
import SignUp from "../PAGES/SignUp/SignUp";
import Error from "../PAGES/Error/Error";
import Dashboard from "../LAYOUTS/Main/Dashboard";
import Statistics from "../PAGES/DASHBOARD/Statistics/Statistics";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../PAGES/DASHBOARD/UserProfile/UserProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Statistics />,
      },
      {
        path: "userProfile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "/logIn", element: <LogIn /> },
  { path: "/signUp", element: <SignUp /> },
]);

export default router;
