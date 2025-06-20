"use client";

import { usePathname } from "next/navigation";
import React from "react";

const NotFound = () => {
  const pathname = usePathname();
  return <div>Review Not Found {pathname}</div>;
};

export default NotFound;
