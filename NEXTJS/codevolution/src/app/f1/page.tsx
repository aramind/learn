import Link from "next/link";
import React from "react";

const F1 = () => {
  return (
    <div>
      <div>F1</div>
      <div>
        <Link href={"/f1/f2"}>Go to F2</Link>
        <Link href={"/f3"}>Go to F3</Link>
      </div>
    </div>
  );
};

export default F1;
