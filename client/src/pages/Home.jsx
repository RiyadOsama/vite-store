import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="d-flex flex-column justify-content-center my-5">
      <header className=" text-center py-5">
        <h1>Welcome to React Products</h1>
        <p className="lead">Your one-stop solution for awesome products</p>
        <Link to="productList" className="btn btn-light btn-lg mt-3">
          Explore Now
        </Link>
      </header>

      <main className="container my-5">
        <h2 className="text-center mb-4">Our Products</h2>
        <p className="text-center">
          We offer a wide range of high-quality products tailored to your needs.
        </p>
      </main>
    </div>
  );
}

export default Home;
