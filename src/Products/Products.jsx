import Card from "../components/Card";
import "./Products.css";
import products from "../db/data";

const Products = ({ products }) => {
	return (
		<section className="card-container">
			{products.length === 0 ? (
				<div className="no-products-found">No Products Found</div>
			) : (
				products
			)}
		</section>
	);
};

export default Products;
