import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./SingleMeal.scss";
import Loading from "../../components/Loading/Loading";
import { useGlobalContext } from "../../Context";
const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const SingleMeal = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(false);
	const [isExpand, setIsExpand] = useState(false);
	const [meal, setMeal] = useState(null);
	const { addToFav } = useGlobalContext();

	const getMeal = useCallback(async () => {
		setLoading(true);
		try {
			const res = await fetch(url + id);
			const data = await res.json();
			if (data) {
				const {
					idMeal: id,
					strArea: area,
					strCategory: category,
					strMeal: name,
					strMealThumb: image,
					strYoutube: link,
					strInstructions: instructions,
					strIngredient1,
					strIngredient2,
					strIngredient3,
					strIngredient4,
					strIngredient5,
					strIngredient6,
					strIngredient7,
					strIngredient8,
					strIngredient9,
					strIngredient10,
					strIngredient11,
					strIngredient12,
					strIngredient13,
					strIngredient14,
					strIngredient15,
					strMeasure1,
					strMeasure2,
					strMeasure3,
					strMeasure4,
					strMeasure5,
					strMeasure6,
					strMeasure7,
					strMeasure8,
					strMeasure9,
					strMeasure10,
					strMeasure11,
					strMeasure12,
					strMeasure13,
					strMeasure14,
					strMeasure15
				} = data.meals[0];
				const ingredients = [
					`${strIngredient1} - ${strMeasure1}`,
					`${strIngredient2} - ${strMeasure2}`,
					`${strIngredient3} - ${strMeasure3}`,
					`${strIngredient4} - ${strMeasure4}`,
					`${strIngredient5} - ${strMeasure5}`,
					`${strIngredient6} - ${strMeasure6}`,
					`${strIngredient7} - ${strMeasure7}`,
					`${strIngredient8} - ${strMeasure8}`,
					`${strIngredient9} - ${strMeasure9}`,
					`${strIngredient10} - ${strMeasure10}`,
					`${strIngredient11} - ${strMeasure11}`,
					`${strIngredient12} - ${strMeasure12}`,
					`${strIngredient13} - ${strMeasure13}`,
					`${strIngredient14} - ${strMeasure14}`,
					`${strIngredient15} - ${strMeasure15}`
				];
				const newMeal = {
					name,
					area,
					category,
					image,
					link,
					instructions,
					ingredients,
					id
				};
				setMeal(newMeal);
			} else {
				setMeal(null);
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	}, [id]);

	useEffect(() => {
		getMeal();
	}, [id, getMeal]);

	if (loading) {
		return (
			<section>
				<div className="section_header">
					<Link to="/">Home </Link>&nbsp;/ {id}
				</div>
				<Loading />
				<div className="singleMeal_container container"></div>
			</section>
		);
	}
	if (!meal) {
		return <h1>No meal found</h1>;
	} else {
		const { name, area, category, image, link, instructions, ingredients } =
			meal;

		return (
			<section>
				<div className="section_header">
					<Link to="/">Home </Link>&nbsp;/ {name}
				</div>
				<div className="container">
					<Link to="/meals" className="back_btn">
						Back to Meals
					</Link>
				</div>
				<div className="singleMeal_container container">
					<div className="singleMeal_image">
						<img src={image} alt={name} />
					</div>
					<div className="singleMeal_infos">
						<p>
							<span className="title">Name:</span> {name}
						</p>
						<p>
							<span className="title">Category:</span> {category}
						</p>
						<p>
							<span className="title">Area:</span> {area}
						</p>
						<p>
							<span className="title">Instructions:</span>{" "}
							{isExpand ? instructions : `${instructions.substring(0, 500)}...`}
							<button onClick={() => setIsExpand(!isExpand)}>
								{isExpand ? "See Less" : "See More"}
							</button>
						</p>
						<p>
							<span className="title">Ingredents - Measure:</span>&nbsp;
							{ingredients?.map((item, index) => {
								return item ? <span key={index}>{item},&nbsp;</span> : null;
							})}
						</p>
						<button onClick={() => addToFav(meal)}>add to fav</button>
					</div>
				</div>
				<a href={link} target="_blank" rel="noreferrer" className="link_yt">
					Watch on Youtube
				</a>
			</section>
		);
	}
};

export default SingleMeal;
