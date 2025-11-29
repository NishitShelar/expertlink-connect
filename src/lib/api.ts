import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  register: (data: {
    name: string;
    email: string;
    password: string;
    role: string;
    subjects?: string[];
  }) => api.post('/auth/register', data),
  
  login: (data: { email: string; password: string }) => 
    api.post('/auth/login', data),
};

export const mentorsAPI = {
  getAll: () => api.get('/mentors/'),
};

export const questionsAPI = {
  post: (data: { student_id: number; text: string; subject: string }) => 
    api.post('/questions/post', data),
  
  accept: (data: { question_id: number; mentor_id: number }) => 
    api.post('/questions/accept', data),
};
