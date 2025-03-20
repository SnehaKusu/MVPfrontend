import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Mock OTP Generation (No API)
  const sendOtp = (e) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
      setError("Please enter all fields.");
      return;
    }

    const mockOtp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
    alert(`Mock OTP sent to ${email}: ${mockOtp}`); // Show OTP in alert (Replace later with API)

    navigate("/otp-verification", { state: { email } });
  };

  return (
    <div className="main-container">
      <div className="login-container">
        <h1>LOGO</h1>
        <h2>Welcome to PrashaSync</h2>
        <p>Manage patients, track progress, and streamline appointments—all in one place.</p>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={sendOtp}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email/Phone Number</label>
            <input
              type="text"
              placeholder="Enter your email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember Me
            </label>
          </div>

          <a onClick={() => navigate("/forgot-password")} className="forgot-password">
            Forgot Password?
          </a>

          <button type="submit" className="primary-button">Continue</button>
        </form>

        <p className="footer-links">
          <a href="/terms">Terms of Use</a> | <a href="/privacy">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
