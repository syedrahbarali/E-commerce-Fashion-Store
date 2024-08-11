import { Outlet } from "react-router-dom";
import "./auth.css";

const Auth = () => {
  return (
    <div className="auth-page">
      <div className="logo">
        <img src="../../../public/assets/logo.png" alt="" />
      </div>

      <Outlet />
    </div>
  );
};

export default Auth;
