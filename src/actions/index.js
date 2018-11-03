import axios from 'axios';

const ROOT_URL = 'http://localhost:3001'

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export const FETCH_POSTS = 'fetch_posts';
