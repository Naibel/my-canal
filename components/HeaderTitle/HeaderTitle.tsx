import { ReactNode } from "react";

const HeaderTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className={`text-2xl text-left uppercase font-semibold italic`}>
      {children}
    </h2>
  );
};

export default HeaderTitle;
