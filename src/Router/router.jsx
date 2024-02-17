import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
