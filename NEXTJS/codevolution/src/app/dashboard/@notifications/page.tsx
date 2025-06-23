import Card from "@/app/components/card";
import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <Card>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>Notifications</div>
        <div>
          <Link href={"/dashboard/archived"}>Archived</Link>
        </div>
      </div>
    </Card>
  );
};

export default Notifications;
