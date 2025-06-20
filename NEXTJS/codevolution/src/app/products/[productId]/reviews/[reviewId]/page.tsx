import { notFound } from "next/navigation";
import React from "react";

type ProductReviewProps = {
  params: { productId: string; reviewId: string };
};

const ProductReview = ({ params }: ProductReviewProps) => {
  const { productId, reviewId } = params;

  if (parseInt(reviewId) > 1000) {
    notFound();
  }

  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  );
};

export default ProductReview;
