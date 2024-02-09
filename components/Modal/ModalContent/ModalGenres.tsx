import { Genre } from "@_types/api";

const ModalGenres = ({ genres }: { genres: Array<Genre> }) => (
  <div className="flex gap-3">
    {genres.map((genre: Genre) => (
      <div className="rounded-full border-2 px-4 py-2" key={genre.id}>
        <span className="italic font-semibold mb-2">{genre.name}</span>
      </div>
    ))}
  </div>
);

export default ModalGenres;
