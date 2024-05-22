import { createBrowserRouter } from "react-router-dom";
import Main from "../LAYOUTS/MAIN/Main";
import Home from "../PAGES/HOME/Home";
import About from "../PAGES/ABOUT/About";
import Contact from "../PAGES/CONTACT/Contact";
import LogIn from "../PAGES/LOGIN/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <p>Error</p>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ],
  },
  { path: "/logIn", element: <LogIn /> },
  { path: "/signUp", element: <p>SignUp</p> },
]);

export default router;
