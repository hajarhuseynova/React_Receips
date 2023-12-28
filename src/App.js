import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Details from "./pages/details/Details";
import MainLayouts from "./layouts/MainLayouts";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/create", element: <Create /> },
        { path: "/details/:id", element: <Details /> },
        { path: "/search", element: <Search /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
