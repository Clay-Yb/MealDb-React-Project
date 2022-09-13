import React from "react";
import { useNavigate } from "react-router-dom";

import "./Home.scss";
const Home = () => {
	const navigate = useNavigate();
	return (
		<section>
			<div className="home_container container">
				<div className="home_content">
					<h2>Search Your Fav Meals And Recipe</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
						debitis voluptate, facilis voluptatum eius odit consequatur sint
						harum neque est.
					</p>

					<button onClick={() => navigate("/meals")}>Search Now</button>
				</div>
				<div className="home_image">
					<img
						src="https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg"
						alt="icon"
					/>
				</div>
			</div>
		</section>
	);
};

export default Home;
