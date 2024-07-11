import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserDataForm from './components/UserDataForm';
import HealthPlanDisplay from './components/HealthPlanDisplay';
import FeedbackForm from './components/FeedbackForm';
import GuidedHealthPlanForm from './components/GuidedHealthPlanForm';

function App() {
  const [healthPlan, setHealthPlan] = useState(null);
  const [modifiedHealthPlan, setModifiedHealthPlan] = useState(null);
  const [guidedHealthPlan, setGuidedHealthPlan] = useState(null);

  return (
    <Router>
      <div className="App">
        <h1>Health and Wellness Coach</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/guided">Guided Health Plan</Link>
        </nav>
        <Routes>
          <Route 
            path="/" 
            element={
              <div>
                <UserDataForm setHealthPlan={setHealthPlan} />
                <HealthPlanDisplay healthPlan={healthPlan} />
              </div>
            } 
          />
          <Route 
            path="/feedback" 
            element={
              <div>
                <FeedbackForm setModifiedHealthPlan={setModifiedHealthPlan} />
                <HealthPlanDisplay healthPlan={modifiedHealthPlan} />
              </div>
            } 
          />
          <Route 
            path="/guided" 
            element={
              <div>
                <GuidedHealthPlanForm setGuidedHealthPlan={setGuidedHealthPlan} />
                <HealthPlanDisplay healthPlan={guidedHealthPlan} />
              </div>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
