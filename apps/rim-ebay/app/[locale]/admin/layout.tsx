// components/AdminLayout.js
import React from "react";
import Link from "next/link";
import SideNavigation from "@repo/ui/SideNavigation";

const AdminLayout = ({
  children,
  // params,
}: Readonly<{
  children: React.ReactNode;
  // params: {
  //   locale:string|undefined ;
  // };
}>) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Content */}
      <div className="flex ">
        <SideNavigation />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
