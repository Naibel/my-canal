import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

const SIZE = 25;

const StarRating = ({ note }: { note: number }) => (
  <div className="flex">
    {[...Array(10)].map((star, index) => {
      if (note - index > 1) {
        return <IoMdStar size={SIZE} key={index} />;
      } else if (note - index < 1 && note - index >= 0.5) {
        return <IoMdStarHalf size={SIZE} key={index} />;
      } else {
        return <IoMdStarOutline size={SIZE} key={index} />;
      }
    })}
  </div>
);

export default StarRating;
