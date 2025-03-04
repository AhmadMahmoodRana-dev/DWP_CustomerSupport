import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";
import Layout from "@/layout/Layout";

const PrivateRoutes = () => {
 const { user } = useContext(Context);
  return user ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
