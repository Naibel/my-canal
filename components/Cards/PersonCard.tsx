import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

type PersonCardProps = {
  bgProfile: string;
  name: string;
  gender: number;
};

const PersonCard = ({ bgProfile, name, gender }: PersonCardProps) => (
  <div className="flex flex-col rounded-sm overflow-hidden">
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${bgProfile})`,
        backgroundSize: "cover",
        aspectRatio: "2/3",
      }}
      className="flex items-center justify-center text-center bg-neutral-900"
    >
      {!bgProfile && (
        <p className="text-sm text-neutral-700">Pas d&apos;image</p>
      )}
    </div>
    <div className="flex gap-1 items-center justify-center bg-neutral-700 p-2 text-center">
      <span className="text-sm italic">{name}</span>
      {gender === 1 ? <BsGenderFemale size={13} /> : <BsGenderMale size={13} />}
    </div>
  </div>
);

export default PersonCard;
