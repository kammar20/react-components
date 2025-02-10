import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  function handleLogin(userType) {
    const userData = { name: 'Ammar', userType };

    login(userData);
    navigate(
      userType === 'admin'
        ? '/admin-dashboard'
        : userType === 'student'
        ? '/student-dashboard'
        : '/',
      {
        replace: true,
      }
    );
  }

  console.log(user);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl pt-20 mb-10">Login page</h1>
      <div>
        <button
          onClick={() => handleLogin('admin')}
          className="text-lg bg-green-600 px-5 py-1 rounded-md mr-5"
        >
          Login as Admin
        </button>
        <button
          onClick={() => handleLogin('student')}
          className="text-lg bg-blue-600 px-5 py-1 rounded-md mr-5"
        >
          Login as Student
        </button>
        <button
          onClick={() => handleLogin('guest')}
          className="text-lg bg-pink-600 px-5 py-1 rounded-md"
        >
          Login as Guest
        </button>
      </div>
    </div>
  );
}
