import axios from "axios";

const url = "http://localhost:3001/books";

const get = () => {
	return axios.get(url);
};

const update = () => {
	return console.log("update");
};

export default {
	get,
	update,
};
