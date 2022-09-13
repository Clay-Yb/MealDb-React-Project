import React from "react";
import "./MealPage.scss";
import SearchForm from "../../components/SearchForm/SearchForm";
import MealList from "../../components/MealList/MealList";
import { Link } from "react-router-dom";
const MealPage = () => {
	return (
		<section>
			<div className="section_header">
				<Link to="/">Home </Link>&nbsp;/ Meals
			</div>
			<div className="mealPage_container container">
				<SearchForm />
				<MealList />
			</div>
		</section>
	);
};

export default MealPage;
