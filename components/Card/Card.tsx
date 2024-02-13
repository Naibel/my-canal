import LogoMyCanal from "~/components/LogoMyCanal/LogoMyCanal";

import styles from "./Card.module.css";

type CardProps = {
  poster?: string;
  onClick?: () => void;
  title?: string;
};

const Card = ({ poster, onClick, title }: CardProps) => (
  <div
    style={{
      backgroundImage: poster
        ? `url(https://image.tmdb.org/t/p/original${poster})`
        : "",
      cursor: onClick ? "pointer" : "default",
    }}
    onClick={onClick}
    className={`${styles.icon} ${
      onClick ? "" : "animate-pulse"
    } aspect-[2/3] w-full flex text-center px-5 justify-center flex-col gap-5 items-center bg-no-repeat bg-cover bg-center bg-neutral-600 rounded-md shadow-sm hover:shadow-md hover:bg-neutral-700 active:bg-neutral-800`}
  >
    {!poster && title ? (
      <>
        <LogoMyCanal />
        <span className="uppercase italic font-semibold mb-2">{title}</span>
      </>
    ) : (
      <></>
    )}
    <div className="absolute bg-gradient-to-r from-indigo-500 "></div>
  </div>
);

export default Card;