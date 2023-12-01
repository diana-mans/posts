// src/services/postsApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
    }),
    getPost: builder.query({
      query: (id) => `posts/${id}`,
    }),
  }),
});

// Экспортируйте автоматически сгенерированные хуки для использования в компонентах
export const { useGetPostsQuery, useGetPostQuery } = postsApi;
