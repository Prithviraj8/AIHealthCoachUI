import React, { useState } from 'react';
import axios from 'axios';

function FeedbackForm({ userId, setModifiedHealthPlan }) {
  const [feedback, setFeedback] = useState({
    fitness_feedback: '',
    nutrition_feedback: '',
    mental_health_feedback: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log('Submitting feedback:', { feedback });
      const response = await axios.post('http://localhost:8000/agents/modified_health_plan/', feedback );
      console.log('API Response:', response.data.message);
      setModifiedHealthPlan(response.data.message);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="fitness_feedback" placeholder="Fitness Feedback" value={feedback.fitness_feedback} onChange={handleChange} />
      <input type="text" name="nutrition_feedback" placeholder="Nutrition Feedback" value={feedback.nutrition_feedback} onChange={handleChange} />
      <input type="text" name="mental_health_feedback" placeholder="Mental Health Feedback" value={feedback.mental_health_feedback} onChange={handleChange} />
      <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit Feedback'}</button>
    </form>
  );
}

export default FeedbackForm;
