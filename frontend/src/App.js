import "./App.css";
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "./auth/Login";
import EntryList from "./components/EntryList";
const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Login />,
  },
  {
    path: "/",
    element: <EntryList/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
