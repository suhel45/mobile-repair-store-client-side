import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Home from './component/Home';
import Login from './component/Login';
import MyReview from './component/MyReview';
import Services from './component/Services';
import ServicesDetailsPage from './component/ServicesDetailsPage';
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
          element:<ShowAllDetails></ShowAllDetails>
        },
        {
          path:'/service/:id',
          loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`),
          element:<ServicesDetailsPage></ServicesDetailsPage>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/review',
          loader:()=>fetch('http://localhost:5000/comment'),
          element:<MyReview></MyReview>
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
