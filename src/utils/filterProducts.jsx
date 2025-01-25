import Card from "../components/Card";

// Vefiy Some Filters Option With This Function To Avido Repeat Logic
const matchesFilter = (value, queryValue) =>
	queryValue === "all" ||
	value.toLocaleLowerCase() === queryValue.toLocaleLowerCase();

// Filter Functionality
const filterProducts = (products, query) => {
	const filterdProductsList = [];

	products.forEach((product, i) => {
		// Verfiy Title Matches
		const matchesTitle = product.title
			.toLocaleLowerCase()
			.includes(query.searchInput.trim().toLocaleLowerCase());

		// Verfiy Company Matches
		const matchesCompany = matchesFilter(product.company, query.company);

		// Verfiy Category Matches
		const matchesCategory = matchesFilter(product.category, query.category);

		// Verfiy Color Matches
		const matchesColor = matchesFilter(product.color, query.color);

		// Verfiy Price Matches
		const matchesPrice =
			query.price === "all" ||
			(query.price === "over $150" && +product.newPrice >= 150) ||
			(query.price.includes(":") &&
				product.newPrice >= JSON.parse(query.price).min &&
				product.newPrice <= JSON.parse(query.price).max);

		// Vefiy That All Filters Are True
		if (
			matchesTitle &&
			matchesCompany &&
			matchesCategory &&
			matchesPrice &&
			matchesColor
		) {
			// Create Product Card And Push It To Filtered Products List
			filterdProductsList.push(
				<Card
					key={i}
					img={product.img}
					title={product.title}
					reviews={product.reviews}
					prevPrice={product.prevPrice}
					newPrice={product.newPrice}
				/>
			);
		}
	});
	return filterdProductsList;
};

export default filterProducts;
