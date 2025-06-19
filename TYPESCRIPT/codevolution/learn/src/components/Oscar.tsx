import React, { ReactNode } from "react";

type OscarProps = {
  children: ReactNode;
};
const Oscar = ({ children }: OscarProps) => {
  return <div>{children}</div>;
};

export default Oscar;
