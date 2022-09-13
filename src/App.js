import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Home, About, Error, Favourite, SingleMeal, MealPage } from "./pages";

const App = () => {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/favourite" element={<Favourite />} />
				<Route path="/meals/" element={<MealPage />} />
				<Route path="/meals/:id" element={<SingleMeal />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
