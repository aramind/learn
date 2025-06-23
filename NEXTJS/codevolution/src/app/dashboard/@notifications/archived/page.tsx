import Card from "@/app/components/card";
import Link from "next/link";
import React from "react";

const ArchivedNotifications = () => {
  return (
    <Card>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>Archived Notifications</div>
        <div>
          <Link href={"/dashboard"}>Default</Link>
        </div>
      </div>
    </Card>
  );
};

export default ArchivedNotifications;
