import { Stars } from "~/components";

type RatingProps = {
  rating: number;
  nbOfVotes: number;
};

const Rating = ({ rating, nbOfVotes }: RatingProps) => (
  <div className="flex flex-col items-center md:items-end pt-2 py-5 md:py-0">
    <div className="hidden md:block">
      <Stars rating={rating} />
    </div>
    <div>
      <span className="text-sm md:text-base">
        <span className="uppercase italic">Note globale </span>:{" "}
        <span className="uppercase italic font-semibold">{rating}/10 </span>
        <span className="italic">
          sur <span className="font-semibold">{nbOfVotes}</span> vote
          {nbOfVotes > 1 ? "s" : ""}
        </span>
      </span>
    </div>
  </div>
);

export default Rating;
