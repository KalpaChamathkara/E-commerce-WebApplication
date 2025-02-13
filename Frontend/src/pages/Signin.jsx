import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./css/signin.css";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("User Data:", formData);
      alert("Sign in successful!");
    }
  };

  return (
    <div className="signin-page">
      {/* Left Side - Sign In Form */}
      <div className="signin-form">
        <h2>Welcome Back!</h2>
        <p>Sign in to continue shopping at VibeMarket.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-groupSignin">
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

          <div className="form-groupSignin">
            <label>Password</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
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

          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>

        <p className="signup-link">
          Don't have an Account? <Link to="/signup"> Sign Up</Link>
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="signin-image">
        <img
          src="https://design4users.com/wp-content/uploads/2020/11/shopping-illustration-1024x768.png"
          alt="User Avatar"
        />
      </div>
    </div>
  );
};

export default SignInPage;
