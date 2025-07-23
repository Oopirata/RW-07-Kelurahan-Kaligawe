import { createBrowserRouter } from "react-router-dom";
import SimpleLandingPage from "../pages/SimpleLandingPage";
import LandingPage from "../pages/LandingPage";
import PetaBiopori from "../pages/PetaBiopori";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/peta-biopori",
    element: <PetaBiopori />,
  },
]);
