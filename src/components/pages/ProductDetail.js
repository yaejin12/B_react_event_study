import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  //주소에 전달된 파라미터 읽기
  const params = useParams();

  return (
    <>
      <h1>화면 상세보기</h1>
      <p>
        제품ID: {params.prodId}, 페이지번호: {params.pageNo}
      </p>
    </>
  );
}

export default ProductDetail;
