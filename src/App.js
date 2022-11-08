import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Home from './component/Home';
import Services from './component/Services';
import ShowAllDetails from './component/ShowAllDetails';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/service',
          loader:()=>fetch('http://localhost:5000/service'),
          element:<Services></Services>
        },
        {
          path:'/all',
          loader:()=>fetch('http://localhost:5000/service'),
          element:<ShowAllDetails></ShowAllDetails>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
