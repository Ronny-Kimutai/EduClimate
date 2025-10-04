import { Link, useLocation } from "react-router-dom";
import { UI } from "../i18n";

export default function Navbar({ user }) {
	const loc = useLocation();
	const lang = user?.language || 'Kiswahili';
	const ui = UI[lang] || UI['Kiswahili'];

	return (
		<header className="navbar">
			<div className="nav-brand">
				<img src="/vite.svg" alt="logo" style={{height:28}} />
				<span>EduClimate</span>
			</div>

			<nav id="main-nav" className={`nav-links`} aria-label="main navigation">
				<Link to="/" className={`nav-link ${loc.pathname === "/" ? "active" : ""}`}>Nyumbani</Link>
				<Link to="/menu" className={`nav-link ${loc.pathname === "/menu" ? "active" : ""}`}>Menyu</Link>
			<Link to="/weather" className={`nav-link ${loc.pathname === "/weather" ? "active" : ""}`}>Hali ya Hewa</Link>
			<Link to="/learning" className={`nav-link ${loc.pathname === "/learning" ? "active" : ""}`}>Elimu</Link>
				<Link to="/farming" className={`nav-link ${loc.pathname === "/farming" ? "active" : ""}`}>{ui.farming}</Link>
				<Link to="/pastoralists" className={`nav-link ${loc.pathname === "/pastoralists" ? "active" : ""}`}>{ui.pastoralist}</Link>
			</nav>
		</header>
	);
}
