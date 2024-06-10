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
import Dashboard from "../LAYOUTS/DASHBOARD/Dashboard";
import Pricing from "../PAGES/PRISING/Pricing";
import SurverDetails from "../PAGES/SURVEYDETAILS/SurverDetails";
import MyServeys from "../PAGES/DASHBOARD/SURVEYOR/MyServeys/MyServeys";
import ManageUsers from "../PAGES/DASHBOARD/ADMIN/ManageUsers/ManageUsers";
import Voters from "../PAGES/DASHBOARD/SURVEYOR/Voters/Voters";
import Payments from "../PAGES/DASHBOARD/ADMIN/Payments/Payments";
import PerticipateSurvey from "../PAGES/DASHBOARD/USER/PerticipateSurvey/PerticipateSurvey";
import MannageSurveys from "../PAGES/DASHBOARD/ADMIN/MannageSurveys/MannageSurveys";
import CommentedSurvey from "../PAGES/DASHBOARD/USER/ConmentedSurvey/CommentedSurvey";
import Surveys from "../PAGES/Surveys/Surveys";
import Feedbacks from "../PAGES/DASHBOARD/SURVEYOR/Feedbacks/Feedbacks";
import Reported from "../PAGES/DASHBOARD/USER/Reported/Reported";
import AddSurvey from "../PAGES/DASHBOARD/SURVEYOR/AddSurvey/AddSurvey";
import ProUserRoute from "./ProUserRoute";
import SurveyorRoute from "./SurveyorRoute";
import AdminRoute from "./AdminRoute";
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "surveys",
        element: <Surveys />,
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
        element: (
          <PrivateRoute>
            <PerticipateSurvey />
          </PrivateRoute>
        ),
      },
      {
        path: "commented",
        element: (
          <PrivateRoute>
            <ProUserRoute>
              <CommentedSurvey />
            </ProUserRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "reported",
        element: (
          <PrivateRoute>
            <Reported />
          </PrivateRoute>
        ),
      },
      {
        path: "addSurvey",
        element: (
          <PrivateRoute>
            <SurveyorRoute>
              <AddSurvey />
            </SurveyorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "mySurveys",
        element: (
          <PrivateRoute>
            <SurveyorRoute>
              <MyServeys />
            </SurveyorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "feedbacks",
        element: (
          <PrivateRoute>
            <Feedbacks />
          </PrivateRoute>
        ),
      },
      {
        path: "survey/:id",
        element: (
          <PrivateRoute>
            <SurveyorRoute>
              <Voters />
            </SurveyorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "allUsers",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manageSurveys",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <MannageSurveys />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "payments",
        element: (
          <PrivateRoute>
            <Payments />
          </PrivateRoute>
        ),
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
