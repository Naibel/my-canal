import React from "react";

type ModalProductionProps = {
  logo: string;
  name: string;
};

const ModalProduction = ({ logo, name }: ModalProductionProps) => (
  <div className="flex flex-col rounded-sm overflow-hidden">
    <div className="p-3 bg-neutral-500">
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${logo})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          aspectRatio: "16/9",
        }}
        className="flex items-center justify-center text-center"
      >
        {!logo && (
          <p className="text-sm text-neutral-200">Flûte, y'a pas d'image !</p>
        )}
      </div>
    </div>

    <div className="flex gap-1 items-center justify-center bg-neutral-700 p-2 text-center">
      <span className="text-sm italic">{name}</span>
    </div>
  </div>
);

export default ModalProduction;
