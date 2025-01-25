import "./Recommended.css";

const Recommended = ({ handelQueryChange }) => {
	return (
		<div className="recommended-container">
			<h2 className="recommended-title">Recommended</h2>
			<div className="recommended-btns">
				<button
					className="btns"
					name="company"
					value="all"
					onClick={handelQueryChange}
				>
					All Products
				</button>
				<button
					className="btns"
					name="company"
					value="nike"
					onClick={handelQueryChange}
				>
					Nike
				</button>
				<button
					className="btns"
					name="company"
					value="adidas"
					onClick={handelQueryChange}
				>
					Adidas
				</button>
				<button
					className="btns"
					name="company"
					value="puma"
					onClick={handelQueryChange}
				>
					Puma
				</button>
				<button
					className="btns"
					name="company"
					value="vans"
					onClick={handelQueryChange}
				>
					Vans
				</button>
			</div>
		</div>
	);
};

export default Recommended;
