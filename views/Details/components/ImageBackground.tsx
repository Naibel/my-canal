import { ReactNode } from "react";

import { LogoMyCanal } from "~/components";

type ImageBackgroundProps = {
  children: ReactNode;
  bgImage?: string;
  small?: boolean;
  isSkeleton?: boolean;
};

const ImageBackground = ({
  bgImage,
  children,
  small = false,
  isSkeleton,
}: ImageBackgroundProps) => (
  <header
    style={{
      backgroundImage: !isSkeleton && bgImage ? `url(${bgImage})` : "",
    }}
    className={`${
      isSkeleton ? "animate-pulse" : ""
    } bg-neutral-700 flex justify-center relative bg-cover bg-top`}
  >
    <div
      className={`flex flex-1 px-5 ${
        small ? "py-4 md:py-8" : "py-5 md:py-20"
      } bg-black/20 backdrop-saturate-125 backdrop-blur-md`}
    >
      {children}
    </div>
    {!isSkeleton && !bgImage && (
      <div className="opacity-30">
        <LogoMyCanal size="large" />
      </div>
    )}
  </header>
);

export default ImageBackground;
