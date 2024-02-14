import { Title } from "~/components";

export type SelectOption = { label: string; value: string };

type SelectInputProps = {
  data: SelectOption[];
  label: string;
  value: string;
  onChange: (key: string, value: string) => void;
};

const SelectInput = ({ data, label, value, onChange }: SelectInputProps) => (
  <div className="flex flex-col md:flex-row md:items-center gap-5">
    <div className="flex-1">
      <Title>{label} :</Title>
    </div>
    <div className="flex flex-1 bg-neutral-900 rounded-full px-5">
      <select
        name={value}
        id={value}
        className="flex-1 py-3 border-0 bg-transparent text-white"
        onChange={(event: any) => onChange(value, event.target.value)}
      >
        {data.map((item: SelectOption, index: number) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default SelectInput;
