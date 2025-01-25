import React from "react";

const RadioInput = ({ id, name, value, defaultChecked = false, title }) => {
	return (
		<label htmlFor={id}>
			<input
				type="radio"
				id={id}
				name={name}
				value={value}
				defaultChecked={defaultChecked}
			/>
			<span></span>
			{title}
		</label>
	);
};

export default RadioInput;
