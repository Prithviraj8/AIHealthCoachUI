import React, { useState } from 'react';
import axios from 'axios';

function UserDataForm({ setHealthPlan }) {
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    fitness_goals: '',
    dietary_preferences: '',
    mental_health_goals: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log('Submitting user data:', userData);
      const response = await axios.post('http://localhost:8000/agents/health_plan/', userData);
      console.log('API Response:', response.data.message);
      setHealthPlan(response.data.message); // Ensure this line correctly updates the state
    } catch (error) {
      console.error('Error submitting user data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={userData.name} onChange={handleChange} required />
      <input type="number" name="age" placeholder="Age" value={userData.age} onChange={handleChange} required />
      <input type="number" name="weight" placeholder="Weight" value={userData.weight} onChange={handleChange} required />
      <input type="number" name="height" placeholder="Height" value={userData.height} onChange={handleChange} required />
      <input type="text" name="fitness_goals" placeholder="Fitness Goals" value={userData.fitness_goals} onChange={handleChange} required />
      <input type="text" name="dietary_preferences" placeholder="Dietary Preferences" value={userData.dietary_preferences} onChange={handleChange} required />
      <input type="text" name="mental_health_goals" placeholder="Mental Health Goals" value={userData.mental_health_goals} onChange={handleChange} required />
      <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
    </form>
  );
}

export default UserDataForm;
