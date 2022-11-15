import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddService from './component/AddService';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Home from './component/Home';
import Login from './component/Login';
import MyReview from './component/MyReview';
import PrivateRoute from './component/PrivateRoute';
import Register from './component/Register';
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
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/review',
          element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
        },
        {
          path:'/addService',
          element:<PrivateRoute><AddService></AddService></PrivateRoute>
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
