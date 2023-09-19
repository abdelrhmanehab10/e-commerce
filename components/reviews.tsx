import { FC } from "react";

interface ReviewsProps {}

const Reviews: FC<ReviewsProps> = ({}) => {
  return (
    <div className="mb-5">
      <h1 className="my-2 text-2xl font-bold">Reviews</h1>
      <div className="md:grid grid-cols-2 gap-2">
        <div className="mb-2 border border-muted-foreground rounded p-3">
          <div className="flex justify-between items-center">
            <h3>Review name</h3>
          </div>
          <p className="text-sm py-2 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            dolorum neque unde, voluptas, ex magni animi nostrum pariatur
            eveniet iste reprehenderit natus esse modi rerum officia ut. Nobis,
            fugit illo.
          </p>
        </div>
        <div className="border border-muted-foreground rounded p-3">
          <div className="flex justify-between items-center">
            <h3>Review name</h3>
          </div>
          <p className="text-sm py-2 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            dolorum neque unde, voluptas, ex magni animi nostrum pariatur
            eveniet iste reprehenderit natus esse modi rerum officia ut. Nobis,
            fugit illo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
