import { AiFillStar } from "react-icons/ai";
import { IoBag } from "react-icons/io5";

const Card = ({ img, title, reviews, prevPrice, newPrice }) => {
	return (
		<section className="card">
			<img src={img} alt="shoe" className="card-img" />
			<div className="card-detials">
				<h3 className="card-title">{title}</h3>
				<div>
					<section className="card-reviews">
						<AiFillStar className="ratings-star" />
						<AiFillStar className="ratings-star" />
						<AiFillStar className="ratings-star" />
						<AiFillStar className="ratings-star" />
						<span className="total-reviews">{reviews}</span>
					</section>
					<section className="card-price">
						<div className="price">
							<span>{prevPrice}</span> {newPrice}
						</div>
						<IoBag className="bag-icon" />
					</section>
				</div>
			</div>
		</section>
	);
};

export default Card;
