import React from "react";

/**
 * Position prop can be one of
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
 *  "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */

type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";
type PositionProps = {
  position:
    | Exclude<`${VerticalPosition}-${HorizontalPosition}`, "center-center">
    | "center";
};
const Toast = ({ position }: PositionProps) => {
  return <div>POSITION is at {position}</div>;
};

export default Toast;
