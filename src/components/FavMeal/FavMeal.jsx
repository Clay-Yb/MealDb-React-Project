import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context";
import "./FavMeal.scss";
const FavMeal = ({ area, category, image, name, id }) => {
	const { removeFromFav } = useGlobalContext();
	return (
		<div className="favMeal">
			<div className="favMeal_image">
				<img src={image} alt={name} />
				<span>{area}</span>
			</div>
			<div className="favMeal_infos">
				<h4>{name}</h4>
				<span>{category}</span>
			</div>
			<div className="favMeal_btns">
				<button>
					<Link to={`/meals/${id}`}>Detail</Link>
				</button>
				<button onClick={() => removeFromFav(id)}>remove</button>
			</div>
		</div>
	);
};

export default FavMeal;
