import React, { useState, useEffect } from "react";
import image from '../../Components/Utilis/images/signin.png'
import './style.css';

function Signup() {
  const initialValues = { userName: "", email: "", password: "", confirmPassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.userName) {
      errors.userName = "User name is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 5) {
      errors.password = "Password must be more than 5 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <img src={image} className="img" alt="Sign Up" />
        <div className="signup-container">
          <h1>Sign Up</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <input
                type="text"
                name="userName"
                placeholder="User Name..."
                value={formValues.userName}
                onChange={handleChange}
                className="ii"
              />
            </div>
            <p>{formErrors.userName}</p>
            <div className="field">
              <input
                type="text"
                name="email"
                placeholder="Email..."
                value={formValues.email}
                onChange={handleChange}
                className="ii"
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="field">
              <input
                type="password"
                name="password"
                placeholder="Password..."
                value={formValues.password}
                onChange={handleChange}
                className="ii"
              />
            </div>
            <p>{formErrors.password}</p>
            <div className="field">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password..."
                value={formValues.confirmPassword}
                onChange={handleChange}
                className="ii"
              />
            </div>
            <p>{formErrors.confirmPassword}</p>
            <button className="buttonsubmit">Sign Up</button>
          </div>
        </div>
      </form>
      <div id="signup-text">
              Already  a user ? <a href="#" className="buttontext">Sign in</a>
            </div>
    </div>
  );
}

export default Signup;
