import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Authentication/Login"; // Ensure path matches folder structure
import ForgotPassword from "./Authentication/ForgotPassword";
import Dashboard from "./Authentication/Dashboard"; // If inside Authentication folder
import OtpVerification from "./Authentication/OtpVerification";
import Onboarding from "./Authentication/Onboarding"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/onboarding" element={<Onboarding />} />

      </Routes>
    </Router>
  );
}

export default App;
