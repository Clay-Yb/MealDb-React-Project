import React from "react";
import "./SearchForm.scss";
import { categories } from "../../assets/data";
import { useGlobalContext } from "../../Context";
import { useRef } from "react";

const allCategories = ["All", ...categories.map((item) => item.category)];

const SearchForm = () => {
	const {
		setSearch,
		setCategory,
		category,
		filterIngre,
		setFilterIngre,
		filterFoodType,
		setFilterFoodType,
		filterArea,
		setFilterArea
	} = useGlobalContext();
	const nameRef = useRef(null);

	return (
		<div className="filter_div">
			<div className="filter_control">
				<input
					type="text"
					autoComplete="off"
					placeholder="Search..."
					ref={nameRef}
					onChange={() => setSearch(nameRef.current.value)}
				/>
			</div>
			<div className="filter_options">
				<h3>Category</h3>
				<select value={category} onChange={(e) => setCategory(e.target.value)}>
					{allCategories.map((item, index) => (
						<option value={item} key={index}>
							{item}
						</option>
					))}
				</select>
			</div>
			<div className="filter_control">
				<h3>Search By Ingredients</h3>
				<input
					type="text"
					placeholder="Chicken"
					autoComplete="off"
					value={filterIngre}
					onChange={(e) => setFilterIngre(e.target.value)}
				/>
			</div>

			<div className="filter_control">
				<h3>Search By FoodType</h3>
				<input
					type="text"
					placeholder="Seafood"
					autoComplete="off"
					value={filterFoodType}
					onChange={(e) => setFilterFoodType(e.target.value)}
				/>
			</div>

			<div className="filter_control">
				<h3>Search By Area</h3>
				<input
					type="text"
					placeholder="Canadian"
					autoComplete="off"
					value={filterArea}
					onChange={(e) => setFilterArea(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default SearchForm;
