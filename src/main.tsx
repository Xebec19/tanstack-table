import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root.tsx";
import ErrorPage from "./error-page.tsx";
import ExpandableTableRoute from "./routes/tables/expandable-table.tsx";
import GroupTable from "./routes/tables/group-table.tsx";
import ColumnSizingTable from "./routes/tables/column-sizing-table.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "table/expandable",
        element: <ExpandableTableRoute />,
      },
      {
        path: "table/group",
        element: <GroupTable />,
      },
      {
        path: "table/column-resize",
        element: <ColumnSizingTable />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
