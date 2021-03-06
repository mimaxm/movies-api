import "./Header.scss";
import { NavLink } from "react-router-dom";
import { FC } from "react";

export const Header: FC = () => {
	return (
		<div>
			<nav className="navbar">
				<ul>
					<li>
						<NavLink to="/" exact className="navbar__link" activeClassName="navbar__link--active">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about" className="navbar__link" activeClassName="navbar__link--active">About</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};
