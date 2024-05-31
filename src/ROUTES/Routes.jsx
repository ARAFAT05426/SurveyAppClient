import { createBrowserRouter } from "react-router-dom";
import Statistics from "../PAGES/DASHBOARD/Statistics/Statistics";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../PAGES/DASHBOARD/UserProfile/UserProfile";
import LogIn from "../PAGES/LOGIN/Login";
import SignUp from "../PAGES/SIGNUP/SignUp";
import Contact from "../PAGES/CONTACT/Contact";
import Home from "../PAGES/HOME/Home";
import Error from "../PAGES/ERROR/Error";
import Main from "../LAYOUTS/MAIN/Main"
import About from "../PAGES/ABOUT/About";
import Dashboard from "../LAYOUTS/DASHBOARD/Dashboard";
import AddSurvey from "../PAGES/DASHBOARD/AddSurvey/AddSurvey";
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
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <PrivateRoute><Statistics /></PrivateRoute>,
      },
      {
        path: 'addServey',
        element: <PrivateRoute><AddSurvey /></PrivateRoute>
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
