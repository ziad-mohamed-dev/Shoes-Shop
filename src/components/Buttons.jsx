const Button = ({ name, value, title }) => {
	return (
		<button className="btns" name={name} value={value}>
			{title}
		</button>
	);
};

export default Button;
