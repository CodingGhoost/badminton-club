import Home from '@/pages/Layout';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import {createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/session',
      },
      {
        path: '/search',
      }
      ,
      {
        path: '/profile',
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
  }
]);

export default router;