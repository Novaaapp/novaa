import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// // 👉 Intercepteur pour ajouter un token d'auth si besoin
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token'); // ou sessionStorage
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default api;
