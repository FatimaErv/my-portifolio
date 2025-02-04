import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";


export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        path: "/",
        element: <Home />, 
      },
     
    ],
  },
]);


