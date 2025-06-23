import React, { ReactNode } from "react";

const DashboardLayout = ({
  children,
  notifications,
  revenue,
  users,
  login,
}: {
  children: ReactNode;
  notifications: ReactNode;
  revenue: ReactNode;
  users: ReactNode;
  login: ReactNode;
}) => {
  const isLoggedIn = false;

  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
};

export default DashboardLayout;
