import { CheckboxInput } from "./CheckboxInput";
import SelectInput, { SelectOption } from "./SelectInput";

const sortByOptions: SelectOption[] = [
  { label: "Popularité ↑", value: "popularity_asc" },
  { label: "Popularité ↓", value: "popularity_desc" },
  { label: "Date de première diffusion ↑", value: "first_air_date.asc" },
  { label: "Date de première diffusion ↓", value: "first_air_date.desc" },
  { label: "Nom ↑", value: "name.asc" },
  { label: "Nom ↓", value: "name.desc" },
  { label: "Note globale ↑", value: "vote_average.asc" },
  { label: "Note globale ↓", value: "vote_average.desc" },
  { label: "Nombre de votes ↑", value: "vote_count.asc" },
  { label: "Nombre de votes  ↓", value: "vote_count.desc" },
];

const languageOptions: SelectOption[] = [
  { label: "Anglais", value: "en-EN" },
  { label: "Français", value: "fr-FR" },
  { label: "Allemand", value: "de-DE" },
];

const mediaTypeOption: SelectOption[] = [
  { label: "Série TV", value: "tv" },
  { label: "Film", value: "movie" },
];

export const DiscoverForm = ({
  onFormChange,
}: {
  onFormChange: (key: string, value: any) => void;
}) => {
  return (
    <div className="flex flex-col gap-5 justify-center">
      <SelectInput
        label="Type de média"
        value="media_type"
        data={mediaTypeOption}
        onChange={onFormChange}
      />
      <SelectInput
        label="Langue"
        value="language"
        data={languageOptions}
        onChange={onFormChange}
      />
      <SelectInput
        label="Trier par"
        value="sort_by"
        data={sortByOptions}
        onChange={onFormChange}
      />
      <CheckboxInput
        label="Autoriser du contenu pour adultes"
        value="include_adult"
        onCheck={onFormChange}
      />
      <CheckboxInput
        label="Autoriser les séries/films pas encore diffusés"
        value="include_null_first_air_date"
        onCheck={onFormChange}
      />
    </div>
  );
};
