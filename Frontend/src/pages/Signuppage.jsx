import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./css/signup.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephoneNumber: "", //
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (!formData.telephoneNumber.match(/^\d{10}$/))
      newErrors.telephoneNumber = "Enter a valid 10-digit phone number";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("User Data:", formData);
      alert("Sign up successful!");
    }
  };

  return (
    <div className="signup-page">
      {/* Left Side - Image */}
      <div className="signup-image">
        <img
          src="https://design4users.com/wp-content/uploads/2020/11/shopping-illustration-1024x768.png"
          alt="User Avatar"
        />
      </div>

      {/* Right Side - Signup Form */}
      <div className="signup-form">
        <h2>Create an Account</h2>
        <p>Join ElectroShop and start shopping today!</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel" // ✅ Fixed: Correct input type
              placeholder="Enter your Phone Number"
              value={formData.telephoneNumber} // ✅ Fixed: Correct state variable
              onChange={(e) =>
                setFormData({ ...formData, telephoneNumber: e.target.value })
              }
            />
            {errors.telephoneNumber && (
              <span className="error-message">{errors.telephoneNumber}</span>
            )}
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <p className="login-link">
          Already have an Account? <Link to="/signin"> Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
