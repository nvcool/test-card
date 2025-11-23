import { Rating } from "react-simple-star-rating";
export const StarRating = ({ rating }: { rating: number }) => {
  return <Rating allowFraction readonly size={16} initialValue={rating} />;
};
