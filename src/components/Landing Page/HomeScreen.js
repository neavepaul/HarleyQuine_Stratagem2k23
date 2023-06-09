import React from "react";
import doctors from "../../assets/doctors.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { logout } from "../../firebase";

export default function HomeScreen() {
  const { user } = useAuth();
  return (
    <>
      <div className="home-screen">
        <div className="header">
          <div className="left-nav">
            <img
              src={require("../../assets/Logo.png")}
              className="logo"
              alt=""
            ></img>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/form">Update your Details</a>
              </li>
              <li>
                <a href="/upload">Facial Scan</a>
              </li>
              <li>
                <a href="/">Account</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
            </ul>
          </div>
          <div className="right-nav">
            {user ? (
              <button className="signup" onClick={logout}>
                Logout
              </button>
            ) : (
              <Link to="/signup">
                <button className="signup" onClick={() => console.log("hello")}>
                  Sign Up
                </button>
              </Link>
            )}
          </div>
        </div>
        <div className="main-div">
          <div className="main-title">
            <p className="title">
              Welcome to <span className="notpara">MedBook</span>
            </p>
            <p className="desc">
              Hassle Free Registrations with modern facial recognition
              technology.
            </p>
          </div>
          <img src={doctors} alt="" className="doc-img" />
        </div>
        {/* <img src={require("../../assets/wave.png")} className="wave"></img> */}
        <div className="second-card">
          <div className="stats">
            <p className="text-stats">
              150+<span>Doctors</span>
            </p>
            <p className="text-stats">
              150+<span>Nurses</span>
            </p>
            <p className="text-stats">
              150+<span>Happy Customers</span>
            </p>
            <p className="text-stats">
              150+<span>Surgeries/month</span>
            </p>
          </div>
          <div className="img">
            <img
              src={require("../../assets/random.png")}
              className="random-img"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
