import React from "react";
import "./Register.scss";
import { logo } from "../../Icons";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="app__login">
      <div className="login__container">
        <div className="login__container-logo">
          <img src={logo} alt="" />
        </div>
        <form className="login__form">
          <div className="form__input-container">
            <input type="text" placeholder="Username" />
          </div>
          <div className="form__input-container">
            <input type="email" placeholder="Email address" />
          </div>
          <div className="form__input-container">
            <input type="password" placeholder="password" />
          </div>
          <button>Register</button>
        </form>

        <div className="or__login">
          <p>OR</p>
        </div>
        <div className="login__options-container">
          <div className="login__option google">
            <i className="fas fa-google"></i>
            <span>Google</span>
          </div>
          <div className="login__option github">
            <i className="fas fa-google"></i>
            <span>Github</span>
          </div>
        </div>
        <div className="forgot__container">
          <p>
            <Link to="/">Forgot password?</Link>
          </p>
        </div>
      </div>
      <div className="login__footer">
        <p>
          Don't have and account?
          <span>
            <Link to="/login">Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
