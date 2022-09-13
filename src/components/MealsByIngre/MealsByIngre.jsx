import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const MealsByIngre = ({ strMeal, idMeal, strMealThumb, isGrid }) => {
	return (
		<div className={isGrid ? "meal" : "meal active_flex"}>
			<div className="meal_image">
				<img src={strMealThumb} alt={strMeal} />
				{isGrid && (
					<div className="layer">
						<Link to={`/meals/${idMeal}`}>
							<FiSearch />
						</Link>
					</div>
				)}
			</div>
			<div className="meal_infos">
				<h5>
					{isGrid && strMeal.length > 15
						? `${strMeal.substring(0, 15)}...`
						: strMeal}
				</h5>
				{!isGrid && <Link to={`/meals/${idMeal}`}>Details</Link>}
			</div>
		</div>
	);
};

export default MealsByIngre;
