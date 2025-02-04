import { useState, useEffect } from "react";
import service from "../services/server";
import "../styles/Cart.css";

const Cart = ({ total = 0, onRemove }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [cartResponse, booksResponse] = await Promise.all([
					service.getCart(),
					service.getBooks(),
				]);
				setCartItems(cartResponse.data);
				setBooks(booksResponse.data);
			} catch (error) {
				console.error("Failed to fetch data:", error);
			}
		};
		fetchData();
	}, [total]);

	const handleRemove = async (itemId) => {
		try {
			await service.removeFromCart(itemId);
			setCartItems(cartItems.filter((item) => item.id !== itemId));
			if (onRemove) onRemove();
		} catch (error) {
			console.error("Failed to remove item:", error);
		}
	};

	return (
		<div
			className="cart-container"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<p>Cart: {total}</p>
			{isHovered && (
				<div className="cart-dropdown">
					{cartItems.length > 0 ? (
						cartItems.map((item) => (
							<div
								key={`cart-${item.id}`}
								className="cart-item">
								<h3>{books.find((book) => book.id === item.bookId)?.title}</h3>
								<p>Quantity: {item.quantity}</p>
								<button
									className="remove-btn"
									onClick={() => handleRemove(item.id)}>
									Remove
								</button>
							</div>
						))
					) : (
						<p>Cart is empty</p>
					)}
				</div>
			)}
		</div>
	);
};

export default Cart;
