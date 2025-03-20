import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"; // Ensure global styling is applied

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [selectedTriggers, setSelectedTriggers] = useState([]);
  const [selectedStrategies, setSelectedStrategies] = useState([]);
  const [selectedReminder, setSelectedReminder] = useState("");
  const navigate = useNavigate();

  // ✅ Handle Checkbox Selection
  const handleCheckboxChange = (option, type) => {
    if (type === "triggers") {
      setSelectedTriggers((prev) =>
        prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
      );
    } else if (type === "strategies") {
      setSelectedStrategies((prev) =>
        prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
      );
    } else if (type === "reminder") {
      setSelectedReminder(option);
    }
  };

  // ✅ Move to Next Step
  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      alert("Onboarding Complete! Redirecting to Dashboard...");
      setTimeout(() => navigate("/dashboard"), 1500);
    }
  };

  // ✅ Move to Previous Step
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="onboarding-container">
      <h1>Personalized Wellness Starts Here</h1>

      {/* ✅ STEP 1: Mood Triggers */}
      {step === 1 && (
        <>
          <p>Identify Your Mood Triggers</p>
          <div className="checkbox-group">
            {["Work/School Stress", "Relationships", "Health Concerns", "Financial Worries", "Lack of Sleep", "Other"].map(
              (option) => (
                <label key={option} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedTriggers.includes(option)}
                    onChange={() => handleCheckboxChange(option, "triggers")}
                  />
                  <span className="custom-checkbox"></span>
                  {option}
                </label>
              )
            )}
          </div>
          <button className="primary-button" onClick={nextStep}>Save & Continue</button>
        </>
      )}

      {/* ✅ STEP 2: Coping Strategies */}
      {step === 2 && (
        <>
          <p>Your Coping Strategies</p>
          <div className="checkbox-group">
            {["Exercise or Physical Activity", "Meditation or Mindfulness", "Talking to Friends/Family", "Journaling", "Professional Support", "Other"].map(
              (option) => (
                <label key={option} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedStrategies.includes(option)}
                    onChange={() => handleCheckboxChange(option, "strategies")}
                  />
                  <span className="custom-checkbox"></span>
                  {option}
                </label>
              )
            )}
          </div>
          <div className="button-group">
            <button className="back-button" onClick={prevStep}>Back</button>
            <button className="primary-button" onClick={nextStep}>Save & Continue</button>
          </div>
        </>
      )}

      {/* ✅ STEP 3: Mood Tracking Reminder */}
      {step === 3 && (
        <>
          <p>Daily Mood Tracking Reminder</p>
          <div className="checkbox-group">
            {["Every 3hrs", "Every 2hrs", "Every 5hrs", "Only Morning", "Only Afternoon", "No, I’ll track it manually"].map(
              (option) => (
                <label key={option} className="checkbox-label">
                  <input
                    type="radio"
                    name="reminder"
                    checked={selectedReminder === option}
                    onChange={() => handleCheckboxChange(option, "reminder")}
                  />
                  <span className="custom-radio"></span>
                  {option}
                </label>
              )
            )}
          </div>
          <div className="button-group">
            <button className="back-button" onClick={prevStep}>Back</button>
            <button className="primary-button" onClick={nextStep}>Finish Setup</button>
          </div>
        </>
      )}
    </div>
  );
}
