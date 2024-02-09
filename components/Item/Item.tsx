import styles from "./Item.module.css";

const Item = ({
  poster,
  onClick,
}: {
  poster?: string;
  onClick?: () => void;
}) => (
  <div
    style={{
      backgroundImage: poster
        ? `url(https://image.tmdb.org/t/p/original${poster})`
        : "",
      aspectRatio: "2/3",
      cursor: onClick ? "pointer" : "default",
    }}
    onClick={onClick}
    className={`${styles.icon} ${
      onClick ? "" : "animate-pulse"
    }  w-1/3 bg-no-repeat bg-cover bg-center bg-neutral-600 p-3 rounded-md shadow-sm hover:shadow-md`}
  ></div>
);

export default Item;
