import axios from "axios";

const baseUrl = "http://localhost:3001";

const getBooks = () => {
	return axios.get(`${baseUrl}/books`);
};

const getCart = () => {
	return axios.get(`${baseUrl}/cart`);
};

const addToCart = (cartItem) => {
	return axios.post(`${baseUrl}/cart`, cartItem);
};

const removeFromCart = (id) => {
	return axios.delete(`${baseUrl}/cart/${id}`);
};

export default {
	getBooks,
	getCart,
	addToCart,
	removeFromCart,
};
