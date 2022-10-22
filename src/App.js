
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Main from './components/Layout/Main';
import Login from './components/Login/Login';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import Signup from './components/Signup/Signup';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/inventory',
          element: <PrivateRouter><Inventory></Inventory></PrivateRouter>
        },
        {
          path: '/about',
          element: <PrivateRouter><About></About></PrivateRouter>
        },
      ]

    },
    {
      path: '/*',
      element: <div><h2>Ops</h2><p>404</p><p>This is not available....</p></div>
    }
  ])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
