import React from "react";

type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};
const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {names.map((name) => (
        <h3>
          {name.first} {name.last}
        </h3>
      ))}
    </div>
  );
};

export default PersonList;
