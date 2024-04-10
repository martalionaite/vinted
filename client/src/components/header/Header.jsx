import { Link } from 'react-router-dom';

export function Header() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <Link to="/vaikams" className="nav-link px-2">Vaikams</Link>
                    <Link to="/namams" className="nav-link px-2">Namams</Link>
                </ul>
            </header>
        </div>
    );
}