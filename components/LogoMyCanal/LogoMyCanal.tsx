type LogoProps = {
  large?: boolean;
};

export const LogoMyCanal = ({ large }: LogoProps) => (
  <div>
    <h2 className={`text-${large ? 7 : 3}xl`}>
      <span>my</span>
      <span className={`font-bold italic`}>CANAL</span>
    </h2>
  </div>
);
