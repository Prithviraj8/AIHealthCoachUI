import axios from 'axios';

const API_BASE_URL = 'https://healthcoachai.pythonanywhere.com';

// Function to fetch health plan
export const fetchHealthPlan = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/agents/health_plan/`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching health plan:', error);
    throw error;
  }
};

// Function to fetch modified health plan
export const fetchModifiedHealthPlan = async (userData, feedbackData) => {
  const data = { ...userData, ...feedbackData };
  try {
    const response = await axios.post(`${API_BASE_URL}/agents/modified_health_plan/`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching modified health plan:', error);
    throw error;
  }
};

// Function to fetch guided health plan
export const fetchGuidedHealthPlan = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/agents/guided_health_plan/`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching guided health plan:', error);
    throw error;
  }
};
