import { SpokenLanguages as SpokenLanguagesType } from "~/types/api";

type SpokenLanguagesProps = {
  label: string;
  values: SpokenLanguagesType[] | undefined;
};

const SpokenLanguages = ({ label, values }: SpokenLanguagesProps) =>
  !values || values.length === 0 ? (
    false
  ) : (
    <div>
      <h3 className="text-sm uppercase italic font-semibold">{label}</h3>
      <ul className="list-disc list-inside	">
        {values.map((value, index) => (
          <li key={index}>{value.name}</li>
        ))}
      </ul>
    </div>
  );

export default SpokenLanguages;
