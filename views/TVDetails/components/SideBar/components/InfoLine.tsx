type InfoLineProps = {
  label: string;
  value: string | number;
};

const InfoLine = ({ label, value }: InfoLineProps) =>
  value ? (
    <div>
      <h3 className="text-md uppercase italic font-semibold">{label}</h3>
      <p className="text-md italic">{value}</p>
    </div>
  ) : (
    false
  );

export default InfoLine;
