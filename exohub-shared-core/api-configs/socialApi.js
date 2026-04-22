import apiClient from './apiClient';

export const socialApi = {
  getPosts: (category) => apiClient.get(\/posts?category=\\),
  createPost: (postData) => apiClient.post('/posts', postData),
};
