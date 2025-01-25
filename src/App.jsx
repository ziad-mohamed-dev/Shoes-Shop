import { useState } from "react";

// Components
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

// Global CSS
import "./index.css";

// Database
import products from "./db/data";

// Filter Products Function
import filterProducts from "./utils/filterProducts";

const App = () => {
	const [openSidebar, setOpenSidebar] = useState(false);

	const [query, setQuery] = useState({
		searchInput: "",
		company: "all",
		category: "all",
		price: "all",
		color: "all",
	});

	const handelQueryChange = (e) => {
		const { name, value } = e.target;
		setQuery((prev) => ({ ...prev, [name]: value }));
	};

	const filteredProductsList = filterProducts(products, query);

	return (
		<>
			<Sidebar
				openSidebar={openSidebar}
				setOpenSidebar={setOpenSidebar}
				handelQueryChange={handelQueryChange}
			/>
			<main className="main-app-container">
				<Nav
					openSidebar={openSidebar}
					setOpenSidebar={setOpenSidebar}
					handelQueryChange={handelQueryChange}
				/>
				<Recommended handelQueryChange={handelQueryChange} />
				<Products products={filteredProductsList} />
			</main>
		</>
	);
};

export default App;
