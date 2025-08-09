import { FaStar } from "react-icons/fa";

// async function ProductRating({ productId }: { productId: string }) {
async function ProductRating({}: { productId: string }) {
  // temp
  const rating = 4.2;
  const count = 25;
  // We set up a dynamic class
  const className = `flex gap-1 items-center text-md mt-1 mb-4`;
   const countValue = `(${count}) reviews`
  return (
    <span className={className}>
      <FaStar className="w-3 h-3"/> 
      {rating} {countValue}
    </span>
  )
}

export default ProductRating