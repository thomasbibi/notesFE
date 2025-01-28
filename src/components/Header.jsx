import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    const shouldDisplayAuthLinks = ['/signup', '/login'].includes(location.pathname);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NotesApp</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        {shouldDisplayAuthLinks && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup">Signup</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
