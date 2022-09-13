import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../../Context";
import "./Navbar.scss";
const Navbar = () => {
	const { favMeal } = useGlobalContext();
	return (
		<header className="header">
			<nav className="nav container">
				<Link to="/" className="logo">
					Meals<span>DB</span>
				</Link>

				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/meals">Meals</NavLink>
					</li>
					<li className="fav_item">
						<NavLink to="/favourite">Favourite</NavLink>
						{favMeal.length > 0 && <span>{favMeal.length}</span>}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
