import React, { useState } from 'react';
import axios from 'axios';
import HealthPlanDisplay from './HealthPlanDisplay';

const API_BASE_URL = 'https://healthcoachai.pythonanywhere.com';

function Home() {
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    gender: '',
    weight: '',
    height: '',
    fitness_goals: '',
    dietary_preferences: '',
    mental_health_goals: ''
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
      console.log('Submitting user data for health_plan API:', userData);
      const response = await axios.post(API_BASE_URL + '/agents/health_plan/', userData);
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
      <input type="text" name="name" placeholder="Name" value={userData.name} onChange={handleChange} required />
      <input type="number" name="age" placeholder="Age" value={userData.age} onChange={handleChange} required />
      <input type="number" name="weight" placeholder="Weight (kg)" value={userData.weight} onChange={handleChange} required />
      <input type="number" name="height" placeholder="Height (cm)" value={userData.height} onChange={handleChange} required />
      <select name="gender" value={userData.gender} onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="non-binary">Non-binary</option>
        <option value="prefer not to say">Prefer not to say</option>
      </select>
      <input type="text" name="fitness_goals" placeholder="Fitness Goals" value={userData.fitness_goals} onChange={handleChange} required />
      <input type="text" name="dietary_preferences" placeholder="Dietary Preferences" value={userData.dietary_preferences} onChange={handleChange} required />
      <input type="text" name="mental_health_goals" placeholder="Mental Health Goals" value={userData.mental_health_goals} onChange={handleChange} required />
      <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
      {loading && <p>Please wait while your fitness plan is generated...</p>}
    </form>
    {healthPlan && <HealthPlanDisplay healthPlan={healthPlan} />}
    </div>
  );
}

export default Home;
