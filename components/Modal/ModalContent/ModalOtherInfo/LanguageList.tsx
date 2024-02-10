import { SpokenLanguages } from "@_types/api";

type LanguageListProps = {
  label: string;
  values: SpokenLanguages[];
};

export const LanguageList = ({ label, values }: LanguageListProps) => {
  if (values.length === 0) return false;
  return (
    <div>
      <h3 className="text-sm uppercase italic font-semibold">{label}</h3>
      <ul className="list-disc list-inside	">
        {values.map((value, index) => (
          <li key={index}>{value.name}</li>
        ))}
      </ul>
    </div>
  );
};
