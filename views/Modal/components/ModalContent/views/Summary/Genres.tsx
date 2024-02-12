import { Genre } from "~/types/api";

import Tag from "./Tag";

const Genres = ({ genres }: { genres: Array<Genre> }) => (
  <div className="flex flex-wrap gap-2 md:gap-3">
    {genres.map((genre: Genre) => (
      <Tag key={genre.id} value={genre.name} />
    ))}
  </div>
);

export default Genres;
