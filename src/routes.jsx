import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Login from "./Components/Login";
import Page404 from "./Components/Page404";
import AddArt from "./Components/AddArt";
import Homepage from "./Layouts/Homepage";
import AllArts from "./Components/AllArts";
import DetailsArt from "./Components/DetailsArt";
import MyArt from "./Components/MyArt";
import Register from "./Components/Register";
import UpdateArt from "./Components/UpdateArt";
import PrivateRoute from "./PrivateRoute";
import SubCatagoryDetails from "./Components/SubCatagoryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addart",
        element: (
          <PrivateRoute>
            <AddArt />
          </PrivateRoute>
        ),
      },
      {
        path: "/allArts",
        element: <AllArts />,
      },
      {
        path: "/artDetails/:id",
        element: (
          <PrivateRoute>
            <DetailsArt />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateArt/:id",
        element: <UpdateArt />,
      },
      {
        path: "/myArts",
        element: (
          <PrivateRoute>
            <MyArt />
          </PrivateRoute>
        ),
      },
      {
        path: "/subCatagoryDetails/:id",
        element: <SubCatagoryDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;
