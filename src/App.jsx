import { useEffect, useState } from "react";
import "./App.css";
import service from "./services/server";
import Product from "./components/Product";
import Header from "./components/Header";

const App = () => {
	const [books, setBooks] = useState([]);
	const [numCart, increaseNumCart] = useState(0);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		service.getBooks().then((response) => {
			setBooks(response.data);
		});

		service.getCart().then((response) => {
			const cartItems = response.data;
			setCart(cartItems);
			const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
			increaseNumCart(totalItems);
		});
	}, []);

	const incrementCart = async (bookId) => {
		const cartItem = {
			bookId: bookId,
			quantity: 1,
			dateAdded: new Date().toISOString(),
		};

		try {
			await service.addToCart(cartItem);
			increaseNumCart((prevNumCart) => prevNumCart + 1);
			const updatedCart = await service.getCart();
			setCart(updatedCart.data);
		} catch (error) {
			console.error("Failed to add to cart:", error);
		}
	};

	return (
		<div className="parent">
			<Header
				total={numCart}
				onRemove={() => increaseNumCart((prev) => prev - 1)}
			/>
			<div className="content">
				{books.map((inf) => (
					<Product
						key={`book-${inf.id}`}
						title={inf.title}
						author={inf.author}
						text={inf.text}
						inc={() => incrementCart(inf.id)}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
