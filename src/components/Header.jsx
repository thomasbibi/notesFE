import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    const shouldDisplayAuthLinks = ['/signup', '/login'].includes(location.pathname);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* Brand Name */}
                <Link className="navbar-brand" to="/">NotesApp</Link>

                {/* Toggler for mobile view */}
               { shouldDisplayAuthLinks && (
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
               )    
            }

                {/* Collapsible content */}
                <div className="collapse navbar-collapse" id="navbarNav">
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
