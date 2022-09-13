import React from "react";
import "./Meal.scss";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Meal = ({ area, category, id, name, image, instructions, isGrid }) => {
	const navigate = useNavigate();
	return (
		<div className={isGrid ? "meal" : "meal active_flex"}>
			<div className="meal_image">
				<img src={image} alt={name} />
				{isGrid && (
					<div className="layer" onClick={() => navigate(`/meals/${id}`)}>
						<Link to={`/meals/${id}`}>
							<FiSearch />
						</Link>
					</div>
				)}
				<span>{area}</span>
			</div>
			<div className="meal_infos">
				<h5>{name}</h5>
				<p>{category}</p>
				{!isGrid && (
					<>
						<span>{`${instructions.substring(0, 200)} ....`}</span>
						<Link to={`/meals/${id}`}>Details</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default Meal;
