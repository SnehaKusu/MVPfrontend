import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../index.css"; 

export default function OtpVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "example@mail.com";  // Get email from previous page

  // ✅ Handle OTP input
  const handleOtpChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  // ✅ Handle OTP Submission (Mocked)
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    if (enteredOtp.length === 6) {
      alert("OTP Verified Successfully! Redirecting...");

      // ✅ Mock user check: If new, go to onboarding, else dashboard
      const isNewUser = true; // 🔹 Change this to false to test direct dashboard redirect

      setTimeout(() => {
        if (isNewUser) {
          navigate("/onboarding");
        } else {
          navigate("/dashboard");
        }
      }, 2000);
    } else {
      setError("Invalid OTP. Please enter a 6-digit code.");
    }
  };

  return (
    <div className="main-container">
      <div className="login-container">
        <h1>LOGO</h1>
        <h2>Secure Your Account</h2>
        <p>For added security, please verify your identity. Enter the 6-digit code sent to {email}.</p>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleOtpSubmit}>
          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                className="otp-box"
              />
            ))}
          </div>

          <button type="submit" className="primary-button">Verify</button>
        </form>

        <p>Didn’t receive a code?  
          <span onClick={() => alert("Resending OTP...")} style={{ cursor: "pointer", color: "blue" }}>
            Resend
          </span>
        </p>
      </div>
    </div>
  );
}
