import { HomeLayout } from "../layout/HomeLayout";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { Task1 } from "../pages/Task1";
import { Task2 } from "../pages/Task2";
import { Task3 } from "../pages/Task3";

export const homePageRoutes = [
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/task1",
        element: <Task1 />,
      },
      {
        path: "/task2",
        element: <Task2 />,
      },
      {
        path: "/task3",
        element: <Task3 />,
      },
    ],
  },
];
