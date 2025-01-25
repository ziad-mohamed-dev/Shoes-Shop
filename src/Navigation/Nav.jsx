import { FiHeart } from "react-icons/fi";
import "./Nav.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";

const Nav = ({ setOpenSidebar, handelQueryChange }) => {
	return (
		<nav>
			<div className="nav-container">
				<FaFilter
					className="filter-sidebar"
					onClick={() => setOpenSidebar((prev) => !prev)}
				/>
				<input
					type="text"
					className="search-input"
					placeholder="Enter your search shoes"
					name="searchInput"
					onChange={handelQueryChange}
				/>
			</div>
			<div className="profile-contianer">
				<a href="#">
					<FiHeart className="nav-icons" />
				</a>
				<a href="#">
					<AiOutlineShoppingCart className="nav-icons" />
				</a>
			</div>
		</nav>
	);
};

export default Nav;
