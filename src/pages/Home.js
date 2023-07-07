import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  //   const navigate = useNavigate();

  //   function navigationHandler() {
  //     navigate("/products");
  //   }
  return (
    <>
      <h1>Main Page!</h1>
      <Link to={"/products"}>go to products</Link>
      {/* <button onClick={navigationHandler}>Navigate to Products</button> */}
    </>
  );
}

export default HomePage;
