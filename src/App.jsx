import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import CaseDetail from './pages/CaseDetail';

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cases/:slug" element={<CaseDetail />} />
                </Routes>
            </main>
            <footer className="border-t border-cream-300 py-8 text-center text-sm text-text-secondary">
                &copy; {new Date().getFullYear()} Jonas Malm
            </footer>
        </div>
    );
}

export default App;
