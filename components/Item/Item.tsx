import styles from "./Item.module.css";

const Icon = ({
  id,
  title,
  poster,
  onClick,
}: {
  id: number;
  title: string;
  poster: string;
  onClick: () => void;
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${poster})`,
      }}
      onClick={onClick}
      className={`${styles.icon} h-96 bg-no-repeat bg-cover bg-center bg-gradient-to-b from-gray-500 to-gray-600 p-3 rounded-sm shadow-md hover:shadow-xl`}
    >
      {/* <h2>{title}</h2> */}
    </div>
  );
};

export default Icon;
