import React, { useState } from 'react';
import axios from 'axios';
import HealthPlanDisplay from './HealthPlanDisplay';

const API_BASE_URL = 'https://healthcoachai.pythonanywhere.com';

function GuidedHealthPlanForm() {
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    fitness_goals: '',
    dietary_preferences: '',
    mental_health_goals: '',
    fitness_feedback: '',
    nutrition_feedback: '',
    mental_health_feedback: ''
  });

  const [healthPlan, setHealthPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        console.log('Submitting user data for guided_health_plan API:', userData);
        const response = await axios.post(API_BASE_URL + '/agents/guided_health_plan/', userData);
        console.log('API Response:', response.data.message);
        setHealthPlan(response.data.message);
    } catch (error) {
      console.error('Error submitting user data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={userData.name} onChange={handleChange} />
        <input type="number" name="age" placeholder="Age" value={userData.age} onChange={handleChange} />
        <input type="number" name="weight" placeholder="Weight" value={userData.weight} onChange={handleChange} />
        <input type="number" name="height" placeholder="Height" value={userData.height} onChange={handleChange} />
        <input type="text" name="fitness_goals" placeholder="Fitness Goals" value={userData.fitness_goals} onChange={handleChange} />
        <input type="text" name="dietary_preferences" placeholder="Dietary Preferences" value={userData.dietary_preferences} onChange={handleChange} />
        <input type="text" name="mental_health_goals" placeholder="Mental Health Goals" value={userData.mental_health_goals} onChange={handleChange} />
        <input type="text" name="fitness_feedback" placeholder="Fitness Feedback" value={userData.fitness_feedback} onChange={handleChange} />
        <input type="text" name="nutrition_feedback" placeholder="Nutrition Feedback" value={userData.nutrition_feedback} onChange={handleChange} />
        <input type="text" name="mental_health_feedback" placeholder="Mental Health Feedback" value={userData.mental_health_feedback} onChange={handleChange} />
        <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
      </form>
      {healthPlan && <HealthPlanDisplay healthPlan={healthPlan} />}
    </div>
  );
}

export default GuidedHealthPlanForm;
