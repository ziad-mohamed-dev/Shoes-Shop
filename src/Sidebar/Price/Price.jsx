import RadioInput from "../../components/RadioInput";
import "./Price.css";
// id, name, value, title
const Price = () => {
	return (
		<div className="filter-container">
			<h2 className="filter-title">Price</h2>
			<div className="input-lable-container">
				<RadioInput
					id="allPrices"
					name="price"
					value="all"
					defaultChecked={true}
					title="All"
				/>
				<RadioInput
					id="$0 - $50"
					name="price"
					value='{"min":0,"max":50}'
					title="$0 - $50"
				/>
				<RadioInput
					id="$50 - $100"
					name="price"
					value='{"min":50,"max":100}'
					title="$50 - $100"
				/>
				<RadioInput
					id="$100 - $150"
					name="price"
					value='{"min":100,"max":150}'
					title="$100 - $150"
				/>
				<RadioInput
					id="Over $150"
					name="price"
					value="over $150"
					title="Over $150"
				/>
			</div>
		</div>
	);
};

export default Price;
