import axios from "axios";

const baseURL = "http://localhost:3000/products";

// CRUD Operations
const createProduct = async (product) => axios.post(baseURL, product); // Create
const getProducts = async () => axios.get(baseURL); // Read
const getProduct = async (productId) => axios.get(`${baseURL}/${productId}`); // Read
const updateProduct = async (productId, product) =>
  axios.put(`${baseURL}/${productId}`, product); // Update
const deleteProduct = async (productId) =>
  axios.delete(`${baseURL}/${productId}`); // Delete

export { getProducts, getProduct, deleteProduct, createProduct, updateProduct };
