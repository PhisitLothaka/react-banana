import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "../page/Home";
import ProductDetail from "../page/ProductDetail";
import Layout from "../layout/Layout";
import { ModalContextProvider } from "../contexts/ModalContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ModalContextProvider>
        <Layout />
      </ModalContextProvider>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
