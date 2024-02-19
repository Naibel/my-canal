import LogoMyCanal from "~/components/LogoMyCanal/LogoMyCanal";
import { IMAGE_W_342_PREFIX_URL } from "~/utils/fetch";

import styles from "./Card.module.css";

type CardProps = {
  id: number;
  poster?: string;
  onClick?: (id: number) => void;
  title?: string;
};

const Card = ({ id, poster, onClick, title }: CardProps) => (
  <div
    style={{
      backgroundImage: poster ? `url(${IMAGE_W_342_PREFIX_URL}${poster})` : "",
      cursor: onClick ? "pointer" : "default",
    }}
    onClick={() => onClick && onClick(id)}
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
  </div>
);

export default Card;
