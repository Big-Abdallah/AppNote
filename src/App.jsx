import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./Layouts/AuthLayout";
import LoginPage from "./Page/LoginPage";
import RegisterPage from "./Page/RegisterPage";
import MainLayout from "./Layouts/MainLayout";
import NoteFoundPage from "./Page/NoteFoundPage"
import FeedPage from "./Page/FeedPage";

import ProtectedRout from "./services/ProtectedRouts/ProtectedRout";
import ProtectedAuth from "./services/ProtectedRouts/ProtectedAuth";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: (
            <ProtectedAuth>
              <LoginPage />
            </ProtectedAuth>
          ),
        },
        {
          path: "register",
          element: (
            <ProtectedAuth>
              <RegisterPage />
            </ProtectedAuth>
          ),
        },
      ],
    },

    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRout>
              <FeedPage />
            </ProtectedRout>
          ),
        },
        

        { path: "*", element: <NoteFoundPage /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
