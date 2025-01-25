import RadioInput from "../../components/RadioInput";
import "./Category.css";

const Category = () => {
	return (
		<div className="filter-container">
			<h2 className="filter-title">Category</h2>
			<div className="input-lable-container">
				<RadioInput
					name="category"
					id="allCategory"
					value="all"
					defaultChecked={true}
					title="All"
				/>
				<RadioInput
					name="category"
					id="sneakers"
					value="sneakers"
					title="Sneakers"
				/>
				<RadioInput
					name="category"
					id="flats"
					value="flats"
					title="Flats"
				/>
				<RadioInput
					name="category"
					id="sandals"
					value="sandals"
					title="Sandals"
				/>
				<RadioInput
					name="category"
					id="heels"
					value="heels"
					title="Heels"
				/>
			</div>
		</div>
	);
};

export default Category;
