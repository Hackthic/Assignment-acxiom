import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-200 mb-4">
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/login" className="mr-4">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}
