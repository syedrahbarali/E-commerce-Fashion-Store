import { Link, useNavigate } from "react-router-dom";
import "./signin.css";
import { toast } from "react-hot-toast";
import { useRef } from "react";

const Signin = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      email.current.value.trim() != "" ||
      password.current.value.trim() != ""
    ) {
      toast.success("Login Success");
      navigate("/");
    } else {
      toast.error("Login Failed");
    }
  };

  return (
    <div className="signin">
      <form action="" className="form">
        <p className="title">Sign In</p>

        <div className="input">
          <label htmlFor="">Email</label>
          <input ref={email} type="text" name="" id="" />
        </div>

        <div className="input input-password">
          {/* TODO: covert into password */}
          <label htmlFor="">Password</label>
          <div>
            <input ref={password} type="password" name="" id="" />
            <Link to={""} className="forget-password">
              Forgot Password?
            </Link>
          </div>
        </div>

        <button
          onClick={(e) => handleLogin(e)}
          type="submit"
          className="btn btn--secondary"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
