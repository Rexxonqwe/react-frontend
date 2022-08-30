import React, { useState } from "react";
// import "./css/UserDetails.css";
import axios from "axios";
const UserDetails = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    linkedInURL: "",
    city: "",
    state: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const userDetails = async () => {
    try {
      //
      const { fname, lname, linkedInURL, city, state, country } = user;
      const result = await axios({
        method: "POST",
        url: "http://localhost:8000/api/v1/users/userDetails",
        data: { fname, lname, linkedInURL, city, state, country },
      });
      if (result.data.status === "success") {
        alert("Your details are submitted!");
      }
    } catch (err) {
      //
      alert(err);
    }
  };
  return (
    <div className="wrapper">
      {console.log(user)}
      <h1>Profile Details</h1>
      <form className="form">
        <input
          className="input-items"
          type="text"
          placeholder="Enter your first name"
          name="fname"
          value={user.fname}
          required
          onChange={handleChange}
        />
        <input
          className="input-items"
          type="text"
          placeholder="Enter your last name"
          name="lname"
          value={user.lname}
          required
          onChange={handleChange}
        />
        <input
          className="input-items"
          type="text"
          placeholder="Enter your Linkedin profile URL"
          name="linkedInURL"
          value={user.linkedInURL}
          required
          onChange={handleChange}
        />
        <input
          className="input-items"
          type="text"
          placeholder="Enter your city"
          name="city"
          value={user.city}
          required
          onChange={handleChange}
        />
        <input
          className="input-items"
          type="text"
          placeholder="Enter your State"
          name="state"
          value={user.state}
          required
          onChange={handleChange}
        />
        <input
          className="input-items"
          type="text"
          placeholder="Enter your country"
          name="country"
          value={user.country}
          required
          onChange={handleChange}
        />
        {/* <input className="input-items" type="submit" value="SUBMIT" required /> */}
        <div className="btn" onClick={userDetails}>
          SUBMIT
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
