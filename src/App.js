import logo from './logo.svg';
import './App.css';
// import Counter from './features/counter/counter';
// import Todo from './features/todolist/todolist';
// import Countries from './features/countries/countries';
// import Product from './features/products/products';
// import Posts from './features/post/post';
import { Outlet } from 'react-router-dom';
import Header from './features/shared/header';
function App() {
  return (
    <div className=" p-2 border border-2 border-primary">
      <Header></Header>
      {/* <h2 className="text-center">App Component</h2> */}
      <Outlet></Outlet>
      {/* <Posts></Posts>
      <Counter></Counter>
      <Todo></Todo>
      <Product></Product>
      <Countries></Countries> */}
    </div>
  );
}

export default App;
