import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        <Link to="products">Products</Link> 페이지로 이동하기
      </p>
    </>
  );
}

export default Home;
