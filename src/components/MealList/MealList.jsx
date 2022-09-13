import React from "react";
import { useGlobalContext } from "../../Context";
import "./MealList.scss";
import Loading from "../Loading/Loading";
import Meal from "../Meal/Meal";
import { BiMenu } from "react-icons/bi";
import { BsFillGridFill } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import MealsByIngre from "../MealsByIngre/MealsByIngre";
const MealList = () => {
	const {
		loading,
		meals,
		category,
		mealsIngre,
		isUserInput,
		mealsFood,
		isUserInputFood,
		mealsArea,
		isUserInputArea
	} = useGlobalContext();
	const [filteredMeals, setFilteredMeals] = useState(meals);

	const [isGrid, setIsGrid] = useState(true);

	useEffect(() => {
		if (category === "All") {
			setFilteredMeals(meals);
		} else {
			setFilteredMeals(meals.filter((item) => item.category === category));
		}
	}, [category, meals]);

	if (loading) {
		return <Loading />;
	}

	if (filteredMeals.length < 1) {
		return (
			<span className="error_msg">No Meals Match With Your Search Term</span>
		);
	}

	const switchGird = () => {
		setIsGrid(true);
	};
	const switchFlex = () => {
		setIsGrid(false);
	};

	if (isUserInput) {
		if (mealsIngre) {
			return (
				<div className="meals_box">
					<div className="meals_filterBtns">
						<button onClick={switchGird}>
							<BsFillGridFill className={isGrid && "active"} />
						</button>
						<button onClick={switchFlex}>
							<BiMenu className={isGrid ? "" : "active"} />
						</button>
					</div>
					<div className={isGrid ? "meals_container" : "meals_container flex"}>
						{mealsIngre?.map((meal) => (
							<MealsByIngre key={meal.idMeal} {...meal} isGrid={isGrid} />
						))}
					</div>
				</div>
			);
		} else {
			return (
				<span className="error_msg">No Meals Match With Your Search Term</span>
			);
		}
	}

	if (isUserInputFood) {
		if (mealsFood) {
			return (
				<div className="meals_box">
					<div className="meals_filterBtns">
						<button onClick={switchGird}>
							<BsFillGridFill className={isGrid && "active"} />
						</button>
						<button onClick={switchFlex}>
							<BiMenu className={isGrid ? "" : "active"} />
						</button>
					</div>
					<div className={isGrid ? "meals_container" : "meals_container flex"}>
						{mealsFood?.map((meal) => (
							<MealsByIngre key={meal.idMeal} {...meal} isGrid={isGrid} />
						))}
					</div>
				</div>
			);
		} else {
			return (
				<span className="error_msg">No Meals Match With Your Search Term</span>
			);
		}
	}

	if (isUserInputArea) {
		if (mealsArea) {
			return (
				<div className="meals_box">
					<div className="meals_filterBtns">
						<button onClick={switchGird}>
							<BsFillGridFill className={isGrid && "active"} />
						</button>
						<button onClick={switchFlex}>
							<BiMenu className={isGrid ? "" : "active"} />
						</button>
					</div>
					<div className={isGrid ? "meals_container" : "meals_container flex"}>
						{mealsArea?.map((meal) => (
							<MealsByIngre key={meal.idMeal} {...meal} isGrid={isGrid} />
						))}
					</div>
				</div>
			);
		} else {
			return (
				<span className="error_msg">No Meals Match With Your Search Term</span>
			);
		}
	}

	return (
		<div className="meals_box">
			<div className="meals_filterBtns">
				<button onClick={switchGird}>
					<BsFillGridFill className={isGrid && "active"} />
				</button>
				<button onClick={switchFlex}>
					<BiMenu className={isGrid ? "" : "active"} />
				</button>
			</div>
			<div className={isGrid ? "meals_container" : "meals_container flex"}>
				{filteredMeals?.map((meal) => (
					<Meal key={meal.id} {...meal} isGrid={isGrid} />
				))}
			</div>
		</div>
	);
};

export default MealList;
