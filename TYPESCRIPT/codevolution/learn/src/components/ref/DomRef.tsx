import React, { useEffect, useRef } from "react";

const DomRef = () => {
  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });
  return (
    <div>
      <input type="text" ref={inputRef}></input>
    </div>
  );
};

export default DomRef;
