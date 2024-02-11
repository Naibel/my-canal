import StarRating from "~/components/StarRating/StarRating";

type RatingProps = {
  note: number;
  nbOfVotes: number;
};

const Rating = ({ note, nbOfVotes }: RatingProps) => (
  <div className="flex flex-col items-center md:items-end py-5 md:py-0">
    <StarRating note={note} />
    <div>
      <span className="uppercase italic">Note globale </span>:{" "}
      <span className="uppercase italic font-semibold">{note}/10 </span>
      <span className="italic">
        sur <span className="font-semibold">{nbOfVotes}</span> vote
        {nbOfVotes > 1 ? "s" : ""}
      </span>
    </div>
  </div>
);

export default Rating;
