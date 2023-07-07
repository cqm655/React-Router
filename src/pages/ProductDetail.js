import { useParams, Link } from "react-router-dom";

export default function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Details</h1>
      <p>{params.productId}</p>{" "}
      {/*here we get the params from url, from app page*/}
      <p>
        <Link to=".." relative="path">
          {" "}
          {/* in such format we dont go to the root path, but up one level/segment*/}
          Back
        </Link>
      </p>
    </>
  );
}
