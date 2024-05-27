import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Todo from './features/todolist/todolist';
import Counter from './features/counter/counter';
import Posts from './features/post/post';
import Product from './features/products/products';
import Countries from './features/countries/countries';
import Addpost from './features/post/addpost';
import Editpost from './features/post/editpost';
import Courses from './features/courses/courses';
import Addcourse from './features/courses/addcourse';
import Editcourse from './features/courses/editcourse';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/todolist",
        element: <Todo></Todo>
      },
      {
        path: "/counter",
        element:<Counter></Counter>
      },
      {
        path:"/posts",
        element:<Posts></Posts>
      },
      {
        path:"/products",
        element:<Product></Product>
      },
      {
        path:"/countries",
        element:<Countries></Countries>
      },
      {
        path:"/addPost",
        element:<Addpost></Addpost>
      },
      {
        path:"/editpost",
        element:<Editpost></Editpost>
      },
      {
        path:'/courses',
        element:<Courses></Courses>
      },
      {
        path:'/addcourse',
        element:<Addcourse></Addcourse>
      },
      {
        path:'/editcourse',
        element:<Editcourse></Editcourse>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
