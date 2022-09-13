import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";
const About = () => {
	return (
		<section>
			<div className="section_header">
				<Link to="/">Home </Link>&nbsp;/ About
			</div>
			<div className="about_container container">
				<div className="about_image">
					<img
						src="https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg"
						alt="img"
					/>
				</div>
				<div className="about_content">
					<h1>Our Story</h1>
					<div className="underline"></div>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
						nostrum ipsum. Minus, aut ab. Maiores, excepturi corporis cumque
						dolorem saepe illo et ipsa impedit dolores tenetur earum,
						repudiandae commodi nam voluptate atque temporibus, non fugiat
						eligendi tempora tempore aspernatur quam animi at. Itaque error
						natus voluptates sed, reprehenderit unde saepe! Lorem ipsum dolor,
						sit amet consectetur adipisicing elit. Amet, nostrum ipsum. Minus,
						aut ab. Maiores, excepturi corporis cumque dolorem saepe illo et
						ipsa impedit dolores tenetur earum
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
