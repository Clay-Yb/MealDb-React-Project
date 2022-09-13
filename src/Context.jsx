import {
	useState,
	useCallback,
	useEffect,
	useContext,
	createContext
} from "react";

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const ingreUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

const foodTypeUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

const foodAreaUrl = "http://www.themealdb.com/api/json/v1/1/filter.php?a=";

const AppContext = createContext();

export const useGlobalContext = () => {
	return useContext(AppContext);
};

const Context = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [meals, setMeals] = useState([]); //main search data state

	// input state
	const [search, setSearch] = useState("a");
	const [category, setCategory] = useState("All");
	const [filterIngre, setFilterIngre] = useState("");
	const [filterFoodType, setFilterFoodType] = useState("");
	const [filterArea, setFilterArea] = useState("");

	// filtered data state
	const [mealsIngre, setMealsIngre] = useState([]);
	const [mealsFood, setMealsFood] = useState([]);
	const [mealsArea, setMealsArea] = useState([]);

	// user Type or not userType && start Fetching
	const [isUserInput, setIsUserInput] = useState(false);
	const [isUserInputFood, setIsUserInputFood] = useState(false);
	const [isUserInputArea, setIsUserInputArea] = useState(false);

	const [favMeal, setFavMeal] = useState(
		JSON.parse(localStorage.getItem("favMeals")) || []
	);

	// fetch main foods
	const getMeals = useCallback(async () => {
		setLoading(true);
		try {
			const res = await fetch(url + search);
			const data = await res.json();
			const { meals } = data;

			if (meals) {
				const newMeal = meals.map((meal) => {
					const {
						idMeal: id,
						strArea: area,
						strCategory: category,
						strMeal: name,
						strMealThumb: image,
						strInstructions: instructions
					} = meal;
					return { id, area, category, name, image, instructions };
				});
				setMeals(newMeal);
			} else {
				setMeals([]);
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	}, [search]);

	useEffect(() => {
		const timer = setTimeout(() => {
			getMeals();
			setFilterIngre("");
			setFilterArea("");
			setFilterFoodType("");
		}, 500);
		return () => clearTimeout(timer);
	}, [search, getMeals]);

	// fetch food by ingre
	const getMealsByIngre = useCallback(async () => {
		setLoading(true);
		try {
			const res = await fetch(ingreUrl + filterIngre);
			const data = await res.json();
			const { meals } = data;
			setMealsIngre(meals);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	}, [filterIngre]);

	useEffect(() => {
		const timer = setTimeout(() => {
			getMealsByIngre();
		}, 500);
		return () => clearTimeout(timer);
	}, [filterIngre, getMealsByIngre]);

	// fetch food by type
	const getMealsByFoodType = useCallback(async () => {
		setLoading(true);
		try {
			const res = await fetch(foodTypeUrl + filterFoodType);
			const data = await res.json();
			const { meals } = data;
			setMealsFood(meals);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	}, [filterFoodType]);

	useEffect(() => {
		const timer = setTimeout(() => {
			getMealsByFoodType();
		}, 500);
		return () => clearTimeout(timer);
	}, [filterFoodType, getMealsByFoodType]);

	//fetch food by area
	const getMealsByArea = useCallback(async () => {
		setLoading(true);
		try {
			const res = await fetch(foodAreaUrl + filterArea);
			const data = await res.json();
			const { meals } = data;
			setMealsArea(meals);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	}, [filterArea]);

	useEffect(() => {
		const timer = setTimeout(() => {
			getMealsByArea();
		}, 500);
		return () => clearTimeout(timer);
	}, [filterArea, getMealsByArea]);

	// setting back to default for each filter
	useEffect(() => {
		if (filterIngre) {
			setIsUserInput(true);
			setFilterFoodType("");
			setFilterArea("");
			setIsUserInputFood(false);
			setIsUserInputArea(false);
		} else {
			setIsUserInput(false);
		}
	}, [filterIngre]);

	useEffect(() => {
		if (filterFoodType) {
			setIsUserInputFood(true);
			setFilterIngre("");
			setFilterArea("");
			setIsUserInput(false);
			setIsUserInputArea(false);
		} else {
			setIsUserInputFood(false);
		}
	}, [filterFoodType]);
	useEffect(() => {
		if (filterArea) {
			setIsUserInputArea(true);
			setFilterFoodType("");
			setFilterIngre("");
			setIsUserInputFood(false);
			setIsUserInput(false);
		} else {
			setIsUserInputArea(false);
		}
	}, [filterArea]);

	// set to fav
	const addToFav = (meal) => {
		const alreadyFav = favMeal.find((item) => item.name === meal.name);
		if (alreadyFav) {
			alert("This Meal is already added to favorite");
			return;
		} else {
			setFavMeal([...favMeal, meal]);
			alert("Added to favorite");
		}
	};

	const removeFromFav = (id) => {
		setFavMeal(favMeal.filter((item) => item.id !== id));
	};

	//save to ls
	useEffect(() => {
		localStorage.setItem("favMeals", JSON.stringify(favMeal));
	}, [favMeal]);

	return (
		<AppContext.Provider
			value={{
				loading,
				setLoading,
				meals,
				setSearch,
				setCategory,
				category,
				filterIngre,
				setFilterIngre,
				mealsIngre,
				isUserInput,
				filterFoodType,
				setFilterFoodType,
				filterArea,
				setFilterArea,
				isUserInputFood,
				isUserInputArea,
				mealsFood,
				mealsArea,
				addToFav,
				favMeal,
				removeFromFav
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default Context;
