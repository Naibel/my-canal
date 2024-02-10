import { ReactNode } from "react";

import { LogoMyCanal } from "@components/NavBar/LogoMyCanal";

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
    {!bgImage && <LogoMyCanal />}
    {children}
  </div>
);

export default ImageBackground;
