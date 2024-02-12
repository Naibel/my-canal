import styles from "./LogoMyCanal.module.css";

type LogoProps = {
  size?: "normal" | "large";
};

const LogoMyCanal = ({ size = "normal" }: LogoProps) => (
  <div className="text-center">
    <h2 className={styles[size]}>
      <span>my</span>
      <span className={`font-bold italic`}>CANAL</span>
    </h2>
  </div>
);

export default LogoMyCanal;
