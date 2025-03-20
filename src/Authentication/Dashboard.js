import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  // ✅ Handle Logout Function
  const handleLogout = () => {
    localStorage.removeItem("user"); 
    sessionStorage.removeItem("user");
    navigate("/"); // ✅ Redirect back to login page
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to the Dashboard!</h1>
      <p>This is your dashboard page.</p>
      <button onClick={handleLogout} style={{ padding: "10px", marginTop: "20px", cursor: "pointer" }}>
        Logout
      </button>
    </div>
  );
}
