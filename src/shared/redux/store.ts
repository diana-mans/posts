// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { postsApi } from '../api/postApi';

export const store = configureStore({
  reducer: {
    // Добавляем сервис API, сгенерированный RTK Query, в наш стор
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
});

// Включение автоматических повторных запросов, загрузки и прочего
setupListeners(store.dispatch);
