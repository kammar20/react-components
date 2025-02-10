import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-slate-800 px-16 py-5 flex justify-between items-center">
      <h1 className="text-xl font-medium text-neutral-100">Navbar</h1>
      <ul className="flex items-center gap-10">
        <li>
          <Link to={'/'} className="text-lg text-neutral-100">
            Home
          </Link>
        </li>
        <li>
          <Link to={'about'} className="text-lg text-neutral-100">
            About
          </Link>
        </li>

        {user?.userType === 'admin' && (
          <>
            <li>
              <Link to={'admin-dashboard'} className="text-lg text-neutral-100">
                Admin Dashboard
              </Link>
            </li>
          </>
        )}

        {user?.userType === 'student' && (
          <li>
            <Link to={'student-dashboard'} className="text-lg text-neutral-100">
              Student Dashboard
            </Link>
          </li>
        )}

        {user && (
          <li>
            <button
              onClick={logout}
              className="text-lg bg-red-600 px-5 py-1 rounded-md text-neutral-100"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
