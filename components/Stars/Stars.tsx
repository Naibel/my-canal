import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

const SIZE = 25;

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(10)].map((star, index) => {
      if (rating - index > 1) {
        return <IoMdStar size={SIZE} key={index} />;
      } else if (rating - index < 1 && rating - index >= 0.5) {
        return <IoMdStarHalf size={SIZE} key={index} />;
      } else {
        return <IoMdStarOutline size={SIZE} key={index} />;
      }
    })}
  </div>
);

export default Stars;
