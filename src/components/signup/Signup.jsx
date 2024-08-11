import "./signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <form action="" className="form">
        <p className="title">Sign Up</p>

        <div className="name">
          <div className="input">
            <label htmlFor="">First name</label>
            <input type="text" />
          </div>
          <div className="input">
            <label htmlFor="">Last name</label>
            <input type="text" />
          </div>
        </div>

        <div className="input">
          <label htmlFor="">Mobile</label>
          <input type="text" />
        </div>

        <div className="input">
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" />
        </div>

        <div className="input input-password">
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" />
        </div>

        <button type="submit" className="btn btn--secondary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
