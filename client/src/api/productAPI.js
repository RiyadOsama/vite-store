import axios from "axios";

const baseURL = "http://localhost:3000/products";

const getProducts = async () => axios.get(baseURL);
const getProduct = async (productId) => axios.get(`${baseURL}/${productId}`);
const deleteProduct = async (productId) =>
  axios.delete(`${baseURL}/${productId}`);
const createProduct = async (product) => axios.post(baseURL, product);
const updateProduct = async (productId, product) =>
  axios.put(`${baseURL}/${productId}`, product);

export { getProducts, getProduct, deleteProduct, createProduct, updateProduct };
