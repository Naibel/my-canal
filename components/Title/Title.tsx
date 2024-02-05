import React, { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className={`text-2xl text-left uppercase font-semibold italic`}>
      {children}
    </h2>
  );
};

export default Title;
