import CompanyRoot from "../pages/company/CompanyRoot";
import Icta from "../pages/company/Icta";
import Isp from "../pages/company/Isp";
import UserComplaints from "../pages/company/UserComplaints";
import Home from "../pages/user/Home";
import MainRoot from "../pages/user/MainRoot";
import NewComplaint from "../pages/user/NewComplaint";
import ShowComplaint from "../pages/user/ShowComplaint";
import ShowComplaintCompany from "../pages/company/ShowComplaint";

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
  {
    element: <CompanyRoot />,
    path: "/company",
    children: [
      {
        element: <UserComplaints />,
        path: "",
      },
      {
        element: <Isp />,
        path: "isp",
      },
      {
        element: <Icta />,
        path: "icta",
      },
      {
        element: <ShowComplaintCompany />,
        path: "show_complaint",
      },
    ],
  },
];
