import { createBrowserRouter } from "react-router-dom";
import { homePageRoutes } from "./homePageRoutes";

export const allRoutes = [...homePageRoutes];

export const router = createBrowserRouter(allRoutes);
