import Form from "react-bootstrap/Form";
import StyledButton from "../components/atoms/Button.style";
import { useState, useEffect } from "react";
import { createProduct, getProduct, updateProduct } from "../api/productAPI";
import { useNavigate, useParams } from "react-router-dom";

function ProductForm() {
  const [product, setProduct] = useState({ name: "", price: 0, category: "" });
  const navigate = useNavigate();
  const { id } = useParams(); // get product id from URL

  // 🔹 Load product if editing
  useEffect(() => {
    if (id) {
      getProduct(id)
        .then((res) => setProduct(res.data))
        .catch((err) => console.error("Error fetching product:", err.message));
    }
  }, [id]);

  function inputHandler(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  async function saveProduct(e) {
    e.preventDefault();
    try {
      if (id) {
        await updateProduct(id, product);
      } else {
        const response = await createProduct(product);
        console.log("Product added:", response.data);
      }
      setProduct({ name: "", price: 0, category: "" }); // reset form
      navigate("/productList");
    } catch (error) {
      console.error("Error saving product:", error.message);
    }
  }

  return (
    <div className="container mt-5 w-50">
      <h2 className="my-3">{id ? "Edit Product" : "Add Product"}</h2>
      <Form onSubmit={saveProduct}>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product Name"
            name="name"
            value={product.name}
            onChange={inputHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Product Price"
            name="price"
            value={product.price}
            onChange={inputHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Category</Form.Label>
          <Form.Select
            name="category"
            value={product.category}
            onChange={inputHandler}
          >
            <option value="">Select Category</option>
            <option value="jackets">Jackets</option>
            <option value="menShirt">Male Shirts</option>
            <option value="femaleShirt">Female Shirts</option>
            <option value="menPants">Male Pants</option>
            <option value="femalePants">Female Pants</option>
            <option value="maleShoes">Male Shoes</option>
            <option value="femaleShoes">Female Shoes</option>
            <option value="hoodies">Hoodies</option>
            <option value="accessories">Accessories</option>
          </Form.Select>
        </Form.Group>

        <StyledButton type="submit" $variant="primary">
          {id ? "Update Product" : "Add Product"}
        </StyledButton>
      </Form>
    </div>
  );
}

export default ProductForm;
