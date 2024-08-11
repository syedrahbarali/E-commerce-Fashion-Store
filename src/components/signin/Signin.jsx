import { Link } from "react-router-dom";
import "./signin.css";

const Signin = () => {
  return (
    <div className="signin">
      <form action="" className="form">
        <p className="title">Sign In</p>

        <div className="input">
          <label htmlFor="">Email</label>
          <input type="text" name="" id="" />
        </div>

        <div className="input input-password">
          {/* TODO: covert into password */}
          <label htmlFor="">Password</label>
          <div>
            <input type="text" name="" id="" />
            <Link to={""} className="forget-password">
              Forgot Password?
            </Link>
          </div>
        </div>

        <button type="submit" className="btn btn--secondary">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
