type ProductionPanelProps = {
  logo: string | null;
  name: string;
};

const ProductionPanel = ({ logo, name }: ProductionPanelProps) => (
  <div className="flex flex-col rounded-sm overflow-hidden">
    <div className="p-3 bg-neutral-500">
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${logo})`,
        }}
        className="bg-contain bg-center bg-no-repeat aspect-video	flex items-center justify-center text-center"
      >
        {!logo && <p className="text-sm text-neutral-200">Pas d&apos;image</p>}
      </div>
    </div>

    <div className="flex gap-1 items-center justify-center bg-neutral-700 p-2 text-center">
      <span className="text-sm italic">{name}</span>
    </div>
  </div>
);

export default ProductionPanel;
