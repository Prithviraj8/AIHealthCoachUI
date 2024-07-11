import React from 'react';
import { Link } from 'react-router-dom';

function HealthPlanDisplay({ healthPlan }) {
  if (!healthPlan) {
    return null;
  }

  const { fitness, nutrition, mental_health } = healthPlan;

  return (
    <div>
      <h2>Workout Plan</h2>
      <ul>
        {fitness && fitness.workout_plan && fitness.workout_plan.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Meal Plan</h2>
      <ul>
        {nutrition && nutrition.meal_plan && nutrition.meal_plan.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Mental Health Tips</h2>
      <ul>
        {mental_health && mental_health.wellness_tips && mental_health.wellness_tips.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Add a button to go to the feedback form */}
      <Link to="/feedback">
        <button>Provide Feedback</button>
      </Link>
    </div>
  );
}

export default HealthPlanDisplay;
