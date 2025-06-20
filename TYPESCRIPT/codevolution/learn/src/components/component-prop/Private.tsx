import React, { ComponentType } from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: ComponentType<ProfileProps>;
};
const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Robin" />;
  } else {
    <Login />;
  }
  return <div>Private</div>;
};

export default Private;
