const Tag = ({ value }: { value: string }) => (
  <div className="rounded-full border-2 px-4 py-2">
    <span className="italic font-semibold mb-2">{value}</span>
  </div>
);

export default Tag;
