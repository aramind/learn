import React from "react";

type Params = { productId: string };

type ProductDetailProps = {
  params: Promise<Params>;
};
const ProductDetails = async ({ params }: ProductDetailProps) => {
  const { productId } = await params;
  return <div>Details about product {productId}</div>;
};

export default ProductDetails;
