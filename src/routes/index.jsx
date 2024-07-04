import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import NewComplaint from "../pages/NewComplaint";
import ShowComplaint from "../pages/ShowComplaint";

export const ROUTES = [
  {
    element: <MainRoot />,
    path: "",
    children: [
      {
        element: <Home />,
        path: "",
      },
      {
        element: <NewComplaint />,
        path: "new_complaint",
      },
      {
        element: <ShowComplaint />,
        path: "show_complaint",
      },
    ],
  },
];
