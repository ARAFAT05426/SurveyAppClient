import { createBrowserRouter } from "react-router-dom";
import Main from "../LAYOUTS/MAIN/Main";
import Home from "../PAGES/HOME/Home";
import About from "../PAGES/ABOUT/About";
import Contact from "../PAGES/CONTACT/Contact";
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
  { path: "/login", element: <p>LogIn</p> },
  { path: "/signup", element: <p>SignUp</p> },
]);

export default router;
