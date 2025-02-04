import Cart from "./Cart";

const Header = () => {
	return (
		<div className="header">
			<img
				src="https://i.ebayimg.com/images/g/P8AAAOSww-hlmQCC/s-l400.jpg"
				alt=""
			/>{" "}
			<div>
				<Cart />
			</div>
		</div>
	);
};

export default Header;
