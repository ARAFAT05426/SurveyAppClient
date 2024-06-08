import { createBrowserRouter } from "react-router-dom";
import Statistics from "../PAGES/DASHBOARD/Statistics/Statistics";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../PAGES/DASHBOARD/UserProfile/UserProfile";
import LogIn from "../PAGES/LOGIN/Login";
import SignUp from "../PAGES/SIGNUP/SignUp";
import Contact from "../PAGES/CONTACT/Contact";
import Home from "../PAGES/HOME/Home";
import Error from "../PAGES/ERROR/Error";
import Main from "../LAYOUTS/MAIN/Main";
import About from "../PAGES/ABOUT/About";
import Dashboard from "../LAYOUTS/DASHBOARD/Dashboard";
import AddSurvey from "../PAGES/DASHBOARD/AddSurvey/AddSurvey";
import Pricing from "../PAGES/PRISING/Pricing";
import SurverDetails from "../PAGES/SURVEYDETAILS/SurverDetails";
import MyServeys from "../PAGES/DASHBOARD/SURVEYOR/MyServeys/MyServeys";
import ManageUsers from "../PAGES/DASHBOARD/ADMIN/ManageUsers/ManageUsers";
// import AdminRoute from "./AdminRoute";
// import SuveyorRoute from "./SuveyorRoute";
import Voters from "../PAGES/DASHBOARD/SURVEYOR/Voters/Voters";
import Payments from "../PAGES/DASHBOARD/ADMIN/Payments/Payments";
import PerticipateSurvey from "../PAGES/DASHBOARD/USER/PerticipateSurvey/PerticipateSurvey";
import MannageSurveys from "../PAGES/DASHBOARD/ADMIN/MannageSurveys/MannageSurveys";
import CommentedSurvey from "../PAGES/DASHBOARD/USER/ConmentedSurvey/CommentedSurvey";
import Surveys from "../PAGES/Surveys/Surveys";
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
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "surveys",
        element: <Surveys />
      },
      {
        path: "/survey/:id",
        element: <SurverDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: "perticipate",
        element: <PrivateRoute><PerticipateSurvey /></PrivateRoute>
      },
      {
        path: "commented",
        element: <PrivateRoute><CommentedSurvey /></PrivateRoute>
      },
      {
        path: "addSurvey",
        element: (
          <PrivateRoute>
            <AddSurvey />
          </PrivateRoute>
        ),
      },
      {
        path: "mySurveys",
        element: (
          <PrivateRoute>
              <MyServeys />
          </PrivateRoute>
        ),
      },
      {
        path: "survey/:id",
        element: (
          <PrivateRoute>
              <Voters />
          </PrivateRoute>
        ),
      },
      {
        path: "allUsers",
        element: (
          <PrivateRoute>
              <ManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "manageSurveys",
        element: <MannageSurveys />
      },
      {
        path: "payments",
        element: <PrivateRoute><Payments /></PrivateRoute>
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
