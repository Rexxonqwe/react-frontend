import React from "react";
import { useState } from "react";

const Otp = () => {
  const [user, setUser] = useState({
    otp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <div className="wrapper">
      {console.log(user)}
      <h1>Enter Your OTP</h1>
      <form className="form">
        <input
          className="input-items"
          type="text"
          placeholder="Four digit OTP"
          name="otp"
          value={user.otp}
          onChange={handleChange}
          required
        />
        {/* <input className="input-items" type="submit" value="SIGN UP" required /> */}
        <div className="btn">SUBMIT</div>
      </form>
      <p>Four digit OTP has been sent to your email!</p>
    </div>
  );
};

export default Otp;
