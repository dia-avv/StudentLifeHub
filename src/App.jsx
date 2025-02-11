import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./views/Home";
import StudyTips from "./views/StudyTips";
import CampusEvents from "./views/CampusEvents";
import NotFound from "./views/NotFound";
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/StudentLifeHub/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tips",
        element: <StudyTips />,
      },
      {
        path: "events",
        element: <CampusEvents />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  },
 ]);
 
 
export default function App() {
  return (
  <RouterProvider router={router} />
  );
 } 
