import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NoProjectSelectedPage from "./pages/NoProjectSelectedPage.jsx";
import NewProjectForm from "./pages/NewProjectForm.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <NoProjectSelectedPage /> },
      {
        path: "new-project",
        element: <NewProjectForm />,
      },
      {
        path: "tasks/:id",
        element: <ProjectPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
