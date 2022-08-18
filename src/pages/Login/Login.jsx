import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./Login.css";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(error.message);
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="signup">
      <img
        className="signup-img"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/3a073c5f-0160-4d85-9a42-6f59aa4b64b9/8723f578-a6af-4b6f-9aae-fff2766a17eb/NG-en-20220718-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
      <div className="overlay"></div>
      <div className="signup-form">
        <div className="form">
          <h1>Sign In</h1>
          {error ? <p className="error">{error}</p> : null}
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <input
                onChange={handleEmail}
                type="email"
                class="form-control p-3"
                placeholder="Email"
              />
            </div>
            <div class="mb-3">
              <input
                onChange={handlePassword}
                type="password"
                class="form-control p-3"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-danger form-control py-3 my-3">
              Sign In
            </button>
            <div class="mb-3 form-check d-flex">
              <p>
                <input type="checkbox" class="form-check-input" />
                Remember us
              </p>
              <p className="help">Need Help?</p>
            </div>
            <p>
              <span>New to Netflix?</span>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "white" }}
              >
                Sign Up.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
