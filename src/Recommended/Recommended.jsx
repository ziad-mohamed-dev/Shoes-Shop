import "./Recommended.css";
import Button from "../components/Buttons";

const Recommended = ({ handelQueryChange }) => {
	return (
		<div className="recommended-container">
			<h2 className="recommended-title">Recommended</h2>
			<div className="recommended-btns" onClick={handelQueryChange}>
				<Button name="company" value="all" title="All Products" />
				<Button name="company" value="nike" title="Nike" />
				<Button name="company" value="adidas" title="Adidas" />
				<Button name="company" value="puma" title="Puma" />
				<Button name="company" value="vans" title="Vans" />
			</div>
		</div>
	);
};

export default Recommended;
