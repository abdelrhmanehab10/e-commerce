import { Star } from "lucide-react";
import { FC } from "react";

interface ReviewStarsProps {}

const ReviewStars: FC<ReviewStarsProps> = ({}) => {
  return (
    <div className="py-2 flex gap-1 items-center">
      <Star fill="rgb(250, 204, 21)" className="text-yellow-400 w-5 h-5" />
      <Star fill="rgb(250, 204, 21)" className="text-yellow-400 w-5 h-5" />
      <Star fill="rgb(250, 204, 21)" className="text-yellow-400 w-5 h-5" />
      <Star fill="rgb(250, 204, 21)" className="text-yellow-400 w-5 h-5" />
      <Star fill="rgb(250, 204, 21)" className="text-yellow-400 w-5 h-5" />
      <p className="font-bold text-sm">10 Review</p>
    </div>
  );
};

export default ReviewStars;
