import { Outlet, Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import '../index.css';

const Links = () => (
  <header className="container">
    <nav className="navcontainer">
      <div className="nav-item">
        <Link style={{ textDecoration: 'none' }} to="/">
          <h1>Bookstore CMS</h1>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/">
          <span className="navitem">Books</span>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="categories">
          <span className="navitem">Categories</span>
        </Link>
      </div>
      <button type="button" className="user">
        <FaRegUser color="blue" fontSize="30px" />
      </button>
    </nav>
    <Outlet />

  </header>
);
export default Links;
