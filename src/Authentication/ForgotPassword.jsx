import { useState } from "react";
import "../index.css"; // Import global CSS

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulated API Request (Replace with real API when available)
    setTimeout(() => {
      setMessage("If this email is registered, a reset link has been sent.");
    }, 1000);
  };

  return (
    <div className="login-container">
      <h2>Forgot Password</h2>
      {message && <p className="success-message">{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Enter your registered email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit">Send Reset Link</button>
      </form>

      <a href="/" className="back-to-login">Back to Login</a>
    </div>
  );
}
