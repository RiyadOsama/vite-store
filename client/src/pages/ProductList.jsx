import Table from "react-bootstrap/Table";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import StyledButton from "../components/atoms/Button.style";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../api/productAPI.js";
import { deleteProduct } from "../api/productAPI.js";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getProducts()
      .then((response) => setProducts(response.data))
      .catch((error) =>
        console.error("Error fetching products:", error.message)
      );
  }, []);

  async function deleteHandler(id) {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5 w-50">
      <div className="d-flex justify-content-evenly align-items-start gap-2">
        <Link to="/productList/new" style={{ textDecoration: "none" }}>
          <StyledButton $variant="secondary">Add New Product</StyledButton>
        </Link>

        <input
          style={{
            padding: "7px 12px",
            flex: 1,
            outline: "none",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          type="text"
          placeholder="Search Product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div>
        <h2 className="mt-5 mb-3">Product List</h2>
        <div style={{ maxHeight: "325px", overflowY: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center">
                    No products found
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.category}</td>
                    <td className="d-flex justify-content-evenly">
                      <Link to={`/productList/${product.id}`}>
                        <FaEye size={30} color="green" />
                      </Link>
                      <Link to={`/productList/${product.id}/edit`}>
                        <FaEdit size={30} color="blue" />
                      </Link>
                      <MdDelete
                        size={30}
                        color="red"
                        style={{ cursor: "pointer" }}
                        onClick={() => deleteHandler(product.id)}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
