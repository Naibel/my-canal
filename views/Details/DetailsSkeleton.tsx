import Image from "next/image";

import ImageBackground from "./components/ImageBackground";

const DetailsSkeleton = () => (
  <div className="h-screen">
    <ImageBackground isSkeleton={true}>
      <div className="flex flex-col items-center md:grid md:grid-cols-7 md:items-start gap-2 md:gap-5 max-w-7xl m-auto w-full">
        <div className="animate-pulse aspect-[2/3] w-6/12 md:w-full md:col-span-2 bg-neutral-400 shadow-lg rounded-md"></div>
        <div className="flex flex-1 md:col-span-5 items-center md:items-start flex-col gap-2 md:gap-5"></div>
      </div>
    </ImageBackground>
    <div className="bg-black">
      <div className="max-w-7xl m-auto">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-1 overflow-hidden flex-col gap-5 p-3 md:p-5"></div>
          <div className="flex flex-col w-full md:w-72">
            <div className="bg-neutral-900 flex flex-1  flex-col gap-2 md:gap-4 p-3 md:p-5"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DetailsSkeleton;
