import React, { useState } from "react";
// import "./css/CreatePassword.css";

const SignupEmail = () => {
  const [user, setUser] = useState({
    password: "",
    rePassword: "",
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
      <h1>Create Password</h1>
      <form className="form">
        <input
          className="input-items"
          type="password"
          placeholder="Enter password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <input
          className="input-items"
          type="password"
          placeholder="Re-enter password"
          name="rePassword"
          value={user.rePassword}
          onChange={handleChange}
          required
        />
        <input className="input-items" type="submit" value="SUBMIT" required />
      </form>
    </div>
  );
};

export default SignupEmail;
