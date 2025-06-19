import React from "react";

type StatusProps = {
  status: "loading" | "success" | "error";
};
const Status = ({ status }: StatusProps) => {
  const message = {
    loading: "Loading...",
    success: "Success...",
    error: "Error...",
  };
  return <h2>Status - {message[status]}</h2>;
};

export default Status;
