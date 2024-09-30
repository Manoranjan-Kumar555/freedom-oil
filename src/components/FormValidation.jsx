// Nomarl way to use the form validation not used the other react library

import React, { useState } from "react";

const FormValidation = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);

  const nameHandle = (e) => {
    let name = e.target.value;
    if (name.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setName(name);
  };
  let emailRegx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const emailHandle = (e) => {
    let email = e.target.value;
    if (!email.match(emailRegx)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmail(email);
  };

  const mobileHandle = (e) => {
    let mobile = e.target.value;

    // Check if the length of the mobile number is exactly 10 digits
    if (mobile.length !== 10) {
      setMobileError(true); // Show error if length is not 10
    } else {
      setMobileError(false); // No error if length is exactly 10
    }
    setMobile(mobile);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    let name = e.target[0].value;
    if (name.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    // setName(name);

    let email = e.target[1].value;
    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    // setEmail(email)

    let mobile = e.target[2].value;

    // Check if the length of the mobile number is exactly 10 digits
    if (mobile.length !== 10) {
      setMobileError(true); // Show error if length is not 10
    } else {
      setMobileError(false); // No error if length is exactly 10
    }
    // setMobile(mobile)

    if (name.length >= 3 && email.match(emailRegx) && mobile.length === 10) {
      alert("For has been Submittes Successfully");
      setName("");
      setEmail("");
      setMobile("");
      console.log(`name:- ${name} email:- ${email} mobile:- ${mobile}`);
    } else {
      alert("Please fix the errors in the form.");
    }
    // alert(`Name :- ${e.target[0].value} and Email :- ${e.target[1].value} and mobile :- ${e.target[2].value}`);
  };
  return (
    <div>
      <h1>Form Validation Components Pages</h1>
      <div>
        <form onSubmit={handleSubmitForm}>
          Name :{" "}
          <input type="text" value={name} onChange={nameHandle} name="name" />
          <br />
          <br />
          {nameError ? (
            <span style={{ color: "red" }}>
              Name lenght must be at least 3 characters
            </span>
          ) : (
            ""
          )}
          <br />
          <br />
          Email :{" "}
          <input
            type="text"
            value={email}
            onChange={emailHandle}
            name="email"
          />
          <br />
          <br />
          {emailError ? (
            <span style={{ color: "red" }}>
              Enter the correct email address
            </span>
          ) : (
            ""
          )}
          <br />
          <br />
          Mobile :{" "}
          <input
            type="text"
            value={mobile}
            onChange={mobileHandle}
            name="mobile"
          />
          <br />
          <br />
          {mobileError ? (
            <span style={{ color: "red" }}>Enter the Corect Mobile Number</span>
          ) : (
            ""
          )}
          <br />
          <br />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  );
};

export default FormValidation;
