import React from "react";
import { useSearchParams } from "react-router-dom";

function PaymentVerify() {
  const searchQuery = useSearchParams()[0];
  const reference = searchQuery.get("reference");
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Order success</h1>
      <h3>Order id: {reference}</h3>
    </div>
  );
}

export default PaymentVerify;
