import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./Index.jsx";
import Post from "./Components/Post.jsx";
import Navbar from "./Components/Navbar.jsx";
import About from "./Components/About.jsx";
import "./Styles/main.css";

const backendUrl = "https://blog-backend-production-347b.up.railway.app/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index backendUrl={backendUrl} />,
  },
  {
    path: "posts/:postId",
    element: <Post backendUrl={backendUrl} />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </StrictMode>
);
