import { ReactNode } from "react";

import { LogoMyCanal } from "~/components/LogoMyCanal/LogoMyCanal";

type ImageBackgroundProps = {
  bgImage?: string;
  children: ReactNode;
};

const ImageBackground = ({ bgImage, children }: ImageBackgroundProps) => (
  <div
    style={{
      backgroundImage: bgImage ? `url(${bgImage})` : "",
    }}
    className="bg-neutral-700 flex justify-center aspect-video relative px-10 pt-72 pb-4 bg-cover bg-center"
  >
    {!bgImage && (
      <div className="opacity-30">
        <LogoMyCanal large />
      </div>
    )}
    {children}
  </div>
);

export default ImageBackground;
