import CompanyRoot from "../pages/company/CompanyRoot";
import Icta from "../pages/company/Icta";
import UserComplaints from "../pages/company/UserComplaints";
import Home from "../pages/user/Home";
import MainRoot from "../pages/user/MainRoot";
import NewComplaint from "../pages/user/NewComplaint";
import ShowComplaint from "../pages/user/ShowComplaint";
import ShowComplaintCompany from "../pages/company/ShowComplaint";
import IktaRoot from "../pages/ikta/IktaRoot";
import Ikta from "../pages/ikta/Icta";
import İsp from "../pages/ikta/Isp";
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
    path: "company",
    children: [
      {
        element: <UserComplaints />,
        path: "user_complaints",
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
  {
    element: <IktaRoot />,
    path: "icta",
    children: [
      {
        element: <Ikta />,
        path: "",
      },
      {
        element: <İsp />,
        path: "isp",
      },
    ],
  },
];
