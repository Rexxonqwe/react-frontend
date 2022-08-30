import axios from "axios";
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

  const createaPassword = async () => {
    try {
      //
      const { password } = user;
      const result = await axios({
        method: "POST",
        url: "http://localhost:8000/api/v1/users/createPassword",
        data: { password },
      });
      if (result.data.status === "success") {
        alert("Your Password is saved successfully!");
      }
    } catch (err) {
      //
      alert(err);
    }
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
        {/* <input className="input-items" type="submit" value="SUBMIT" required /> */}
        <div className="btn" onClick={createaPassword}>
          SUBMIT
        </div>
      </form>
    </div>
  );
};

export default SignupEmail;
