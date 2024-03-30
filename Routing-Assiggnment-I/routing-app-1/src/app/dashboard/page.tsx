"use client";
import React from "react";
import { useRouter } from "next/navigation";

function DashboardPage() {
  const router = useRouter();
  const handleGoBack = () => {
    router.push('/home')
  }
  return (
    <>
      <div>This is the DashboardPage</div>
      <div className="cursor-pointer bg-blue-500" onClick={handleGoBack}>Click here to go to the Home Page</div>
    </>
  );
}

export default DashboardPage;
