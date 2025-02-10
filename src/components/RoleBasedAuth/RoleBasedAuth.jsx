import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import ProtectedRoutes from './components/ProtectedRoutes';
import Home from './pages/Home';
import About from './pages/About';
import PrivateRoute from './components/PrivateRoutes';
import AdminDashboard from './pages/AdminDashboard';
import StudentDashboard from './pages/StudentDashboard';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';

export default function RoleBasedAuth() {
  const myRouter = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        // Protected Routes
        {
          element: <ProtectedRoutes />,
          children: [
            {
              path: '/',
              element: <Home />,
            },
            {
              path: 'about',
              element: <About />,
            },

            // Private Route -- admin
            {
              element: <PrivateRoute allowedRoles={['admin']} />,
              children: [
                {
                  path: 'admin-dashboard',
                  element: <AdminDashboard />,
                },
              ],
            },

            // Private Route -- student
            {
              element: <PrivateRoute allowedRoles={['student']} />,
              children: [
                {
                  path: 'student-dashboard',
                  element: <StudentDashboard />,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={myRouter} />
    </AuthProvider>
  );
}
