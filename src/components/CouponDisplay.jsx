import React from "react";

const CouponDisplay = ({ coupon }) => {
  return (
    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mt-4 rounded-md">
      <p className="text-lg font-semibold">
        {coupon ? `Your Coupon Code: ${coupon}` : "No coupon assigned yet."}
      </p>
    </div>
  );
};

export default CouponDisplay;
