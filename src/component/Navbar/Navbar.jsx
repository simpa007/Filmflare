import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./Navbar.css";
export default function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  //console.log(user.email);
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="header">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="header-title">NETFLIX</h1>
        </Link>
        {user?.email ? (
          <div className="header-btn">
            <Link to="/account">
              <button type="button" class="btn text-white btn-lg">
                Account
              </button>
            </Link>

            <button
              onClick={handleLogOut}
              type="button"
              class="btn btn-danger btn-lg"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="header-btn">
            <Link to="/login">
              <button type="button" class="btn text-white btn-lg">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button type="button" class="btn btn-danger btn-lg">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
