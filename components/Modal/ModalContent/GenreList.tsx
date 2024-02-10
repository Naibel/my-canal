import { Genre } from "@_types/api";
import Tag from "@components/Tag/Tag";

const GenreList = ({ genres }: { genres: Array<Genre> }) => (
  <div className="flex flex-wrap gap-3">
    {genres.map((genre: Genre) => (
      <Tag key={genre.id} value={genre.name} />
    ))}
  </div>
);

export default GenreList;
