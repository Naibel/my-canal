type InfoLineProps = {
  label: string;
  value: string | number | undefined;
};

const InfoLine = ({ label, value }: InfoLineProps) =>
  value ? (
    <div>
      <h3 className="text-sm uppercase italic font-semibold">{label}</h3>
      <p className="text-sm italic">{value}</p>
    </div>
  ) : (
    false
  );

export default InfoLine;
