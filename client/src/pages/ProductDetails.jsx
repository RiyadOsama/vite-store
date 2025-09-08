import { Link, useParams } from "react-router-dom";
import StyledButton from "../components/atoms/Button.style";
import { useEffect, useState } from "react";
import { getProduct } from "../api/productAPI";

function ProductDetails() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getProduct(id)
      .then((response) => setSelectedProduct(response.data))
      .catch((error) =>
        console.error("Error fetching products:", error.message)
      );
  }, [id]);
  return (
    <div className="container mt-5 w-50">
      <h2>Product Details</h2>
      <div className="py-3 mb-3 " style={{ fontSize: "28px" }}>
        <div>
          Product id: <span style={{ color: "Red" }}>{selectedProduct.id}</span>
        </div>
        <div>
          Product Name:{" "}
          <span style={{ color: "Red" }}>{selectedProduct.name}</span>
        </div>
        <div>
          Product Price:{" "}
          <span style={{ color: "Red" }}>${selectedProduct.price}</span>
        </div>
      </div>
      <Link to="/productList" style={{ textDecoration: "none" }}>
        <StyledButton type="submit" $variant="secondary">
          Back to Product List
        </StyledButton>{" "}
      </Link>
    </div>
  );
}

export default ProductDetails;
