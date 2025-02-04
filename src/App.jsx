import { useEffect, useState } from "react";
import "./App.css";
import service from "./services/server";
import Product from "./components/Product";
import Header from "./components/Header";

const App = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		service.get().then((response) => {
			setBooks(response.data);
			console.log("hello world", books);
		});
	}, []);

	return (
		<div className="parent">
			<Header />
			<div className="content">
				{books.map((inf) => (
					<Product
						key={inf.id}
						title={inf.title}
						author={inf.author}
						text={inf.text}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
