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

export default Product