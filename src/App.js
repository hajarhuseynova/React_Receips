import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Details from "./pages/details/Details";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/create", element: <Create /> },
    { path: "/details/:id", element: <Details /> },
    { path: "/search", element: <Search /> },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
