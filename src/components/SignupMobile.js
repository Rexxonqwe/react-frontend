import React, { useState } from "react";
// import "./css/SignupMobile.css";

const SignupMobile = () => {
  const [user, setUser] = useState({
    mobileNumber: "",
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
      <h1>REGISTER</h1>
      <form className="form">
        <input
          className="input-items"
          type="text"
          placeholder="Enter your mobile number"
          name="mobileNumber"
          value={user.mobileNumber}
          onChange={handleChange}
          required
        />
        <input className="input-items" type="submit" value="SIGN UP" required />
      </form>
      <p>
        Sign up with Email : <a href="/">click here</a>
      </p>
    </div>
  );
};
export default SignupMobile;
