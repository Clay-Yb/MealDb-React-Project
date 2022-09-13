import React from "react";
import FavMeal from "../../components/FavMeal/FavMeal";
import { useGlobalContext } from "../../Context";
import "./Favourite.scss";
const Favourite = () => {
	const { favMeal } = useGlobalContext();

	if (favMeal.length < 1) {
		return (
			<section>
				<div className="favMeal_container container">
					<h1>
						There is no favourite meals right now
						<br />
						Try to Add one
					</h1>
				</div>
			</section>
		);
	}
	return (
		<section>
			<div className="favMeal_container container">
				{favMeal.map((item) => (
					<FavMeal key={item.id} {...item} />
				))}
			</div>
		</section>
	);
};

export default Favourite;
