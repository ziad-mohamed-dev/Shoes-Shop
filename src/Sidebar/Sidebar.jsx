import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import "./Sidebar.css";

const Sidebar = ({ openSidebar, setOpenSidebar, handelQueryChange }) => {
	return (
		<>
			<div
				className={openSidebar ? "sidebar-overlay" : ""}
				onClick={() => setOpenSidebar(false)}
			></div>
			<aside
				className={`sidebar ${openSidebar ? "" : "closed"}`}
				onChange={handelQueryChange}
			>
				<span
					className="close-sidebar-icon"
					onClick={() => setOpenSidebar(false)}
				>
					X
				</span>
				<div className="logo-container">
					<h1 className="sidebar-title">🛒</h1>
				</div>
				<Category />
				<Price />
				<Colors />
			</aside>
		</>
	);
};

export default Sidebar;
