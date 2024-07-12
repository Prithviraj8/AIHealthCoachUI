import React from 'react';
import { Link } from 'react-router-dom';

function HealthPlanDisplay({ healthPlan }) {
  if (!healthPlan) {
    return null;
  }

  const { workout_plan, meal_plan, wellness_tips } = healthPlan;

  return (
    <div>
      <h2>Workout Plan</h2>
      <ul>
        {workout_plan && workout_plan.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Meal Plan</h2>
      <ul>
        {meal_plan && meal_plan.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Wellness Tips</h2>
      <ul>
        {wellness_tips && wellness_tips.map((item, index) => (
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
