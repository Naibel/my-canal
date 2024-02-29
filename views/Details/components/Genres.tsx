import Tag from "./Tag";

const Genres = ({
  genres,
}: {
  genres: Array<{ id: number; name: string }>;
}) => (
  <div className="flex flex-wrap gap-2 md:gap-3">
    {genres.map((genre: { id: number; name: string }) => (
      <Tag key={genre.id} value={genre.name} />
    ))}
  </div>
);

export default Genres;
