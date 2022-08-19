import React, { useState } from "react";
import axios from "axios";

const SignupEmail = () => {
  const [user, setUser] = useState({
    email: "",
    otp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = async () => {
    try {
      const { email } = user;
      const res = await axios({
        method: "POST",
        url: "http://localhost:8000/api/v1/users/generateOTP",
        data: { email },
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.data.status === "success") {
        alert(`your otp is : ${res.data.otp}`);
        console.log(res);
        document.querySelectorAll(".inactive")[0].classList.add("active");
        document.querySelectorAll(".inactive")[1].classList.add("active");
        document.querySelector(".signup-btn").classList.add("inactive");
      }
    } catch (err) {
      console.log(err);
      alert(err.response.data.error);
    }
  };

  const checkOTP = async () => {
    try {
      const { email, otp } = user;
      const result = await axios({
        method: "POST",
        url: "http://localhost:8000/api/v1/users/checkOTP",
        data: { email, otp },
      });
      console.log(result);
      if (result.data.status === "success") {
        alert("signup is successfull!");
        window.setTimeout(() => {
          // window.location.assign("/createPassword");
        });
      }
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <h1>REGISTER</h1>
        {/* {console.log(user)} */}
        <form className="form">
          <input
            className="input-items"
            type="text"
            placeholder="Enter your email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <input
            className="input-items inactive"
            type="text"
            placeholder="Enter Four digit OTP"
            name="otp"
            value={user.otp}
            onChange={handleChange}
            required
          />

          {/* <input className="input-items" type="submit" value="SIGN UP" /> */}
          <div className="btn signup-btn" onClick={register}>
            SIGN UP
          </div>
          <div className="btn inactive" onClick={checkOTP}>
            SUBMIT
          </div>
        </form>
        <p>
          Sign up with Mobile No : <a href="/register/mobile">click here</a>
        </p>
      </div>
    </div>
  );
};

export default SignupEmail;
