import "./App.css";

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

const Cart = () => {
	return (
		<>
			<p>Cart: 0</p>
		</>
	);
};

const Product = ({ title, author, text }) => {
	return (
		<div className="product">
			<h1>{title}</h1>
			<h3>{author}</h3>
			<p>{text}</p>
			<button>Add to cart</button>
		</div>
	);
};

const App = () => {
	const info = [
		{
			title: "A Study in Scarlet",
			author: "Arthur Conan Doyle",
			text: "The first novel introducing Sherlock Holmes and Dr. Watson, as they solve a mysterious murder involving revenge and a long-buried secret.",
		},
		{
			title: "The Hound of the Baskervilles",
			author: "Arthur Conan Doyle",
			text: "Holmes and Watson investigate the legend of a supernatural hound terrorizing the Baskerville family on the moors of Devonshire.",
		},
		{
			title: "The Adventures of Sherlock Holmes",
			author: "Arthur Conan Doyle",
			text: "A collection of short stories featuring Holmes solving various intriguing and perplexing cases.",
		},
		{
			title: "The Final Problem",
			author: "Arthur Conan Doyle",
			text: "Sherlock Holmes faces his greatest adversary, Professor Moriarty, in a deadly confrontation at the Reichenbach Falls.",
		},
	];
	return (
		<div className="parent">
			<Header />
			<div className="content">
				{info.map((inf) => (
					<Product
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
