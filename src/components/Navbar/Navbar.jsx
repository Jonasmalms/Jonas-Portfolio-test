import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-sm border-b border-cream-300">
            <nav className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
                <Link to="/" className="text-lg font-medium text-text-primary no-underline hover:text-accent transition-colors">
                    Jonas Malm
                </Link>

                {isHome ? (
                    <ul className="flex gap-6 list-none m-0 p-0">
                        <li>
                            <a href="#work" className="text-sm text-text-secondary hover:text-accent transition-colors no-underline">
                                Work
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="text-sm text-text-secondary hover:text-accent transition-colors no-underline">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-sm text-text-secondary hover:text-accent transition-colors no-underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                ) : (
                    <Link
                        to="/"
                        className="text-sm text-text-secondary hover:text-accent transition-colors no-underline"
                    >
                        &larr; Back to work
                    </Link>
                )}
            </nav>
        </header>
    );
}

export default Navbar;
