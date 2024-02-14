type CheckboxInputProps = {
  label: string;
  value: string;
  onCheck: (key: string, value: string) => void;
};

export const CheckboxInput = ({
  label,
  value,
  onCheck,
}: CheckboxInputProps) => (
  <div className="flex gap-4">
    <input
      id={value}
      name={value}
      type="checkbox"
      value={value}
      onClick={(event: any) => onCheck(value, event.currentTarget.checked)}
    />
    <label htmlFor={value}>{label}</label>
  </div>
);
