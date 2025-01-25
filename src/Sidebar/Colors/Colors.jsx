import RadioInput from "../../components/RadioInput";
import "./Colors.css";

const Colors = () => {
	return (
		<div className="filter-container">
			<h2 className="filter-title">Color</h2>
			<div className="input-lable-container">
				<RadioInput
					id="allColors"
					name="color"
					value="all"
					defaultChecked={true}
					title="All"
				/>
				<RadioInput
					id="black"
					name="color"
					value="black"
					title="Black"
				/>
				<RadioInput id="blue" name="color" value="blue" title="Blue" />
				<RadioInput id="red" name="color" value="red" title="Red" />
				<RadioInput
					id="green"
					name="color"
					value="green"
					title="Green"
				/>
				<RadioInput
					id="white"
					name="color"
					value="white"
					title="White"
				/>
			</div>
		</div>
	);
};

export default Colors;
