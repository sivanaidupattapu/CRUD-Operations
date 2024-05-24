import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterslice'
import todolistReducer from '../features/todolist/todolistslice'
import countriesReducer from '../features/countries/countriesslice'
import { countriesApi } from '../services/countriesAPI'
import { productsApi } from '../services/productsApi'
import { postsApi } from '../services/postsApi'
export const store = configureStore({
  reducer: { 
    counterReducer,
    todolistReducer,
    countriesReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware,productsApi.middleware,postsApi.middleware)
  
})