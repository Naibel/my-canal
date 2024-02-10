type InfoLineProps = {
  label: string;
  value: string | number;
};

export const InfoLine = ({ label, value }: InfoLineProps) => {
  if (!value) return false;
  return (
    <div>
      <h3 className="text-sm uppercase italic font-semibold">{label}</h3>
      <p className="text-sm italic">{value}</p>
    </div>
  );
};
