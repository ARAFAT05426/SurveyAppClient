import { createBrowserRouter } from "react-router-dom";
import Main from "../LAYOUTS/MAIN/Main";
import Home from "../PAGES/HOME/Home";
import About from "../PAGES/ABOUT/About";
import Contact from "../PAGES/CONTACT/Contact";
import LogIn from "../PAGES/LOGIN/Login";
import SignUp from "../PAGES/SIGNUP/SignUp";
import Error from "../PAGES/ERROR/Error";
// import Private from "../COMPONENTS/PRIVATE/Private";
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
  { path: "/logIn", element: <LogIn /> },
  { path: "/signUp", element: <SignUp /> },
]);

export default router;
