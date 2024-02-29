const Keywords = ({
  keywords,
}: {
  keywords: Array<{ id: number; name: string }>;
}) => {
  return (
    <div>
      <h3 className="text-md uppercase italic font-semibold">Mots clés</h3>
      <div className="flex gap-2 flex-wrap">
        {keywords.map((keyword) => (
          <div key={keyword.id} className="px-2 py-1 bg-neutral-700 rounded-sm">
            <span>{keyword.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keywords;
