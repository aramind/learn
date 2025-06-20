import React from "react";

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};
const List = <T extends { id: number }>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of Items</h2>
      {items.map((item, index) => {
        return <div key={index} onClick={() => onClick(item)}></div>;
      })}
    </div>
  );
};

export default List;
