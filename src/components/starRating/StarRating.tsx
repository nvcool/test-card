import { Rating } from "react-simple-star-rating";
export const StarRating = ({ rating }: { rating: number }) => {
  return <Rating initialValue={rating} />;
};
