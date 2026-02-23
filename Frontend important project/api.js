import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

export const fetchProjects = () => axios.get(`${API_BASE}/api/projects`).then(r => r.data);
export const sendContact = (payload) => axios.post(`${API_BASE}/api/contact`, payload).then(r => r.data);
