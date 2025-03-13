import React from "react";

const ClaimButton = ({ handleClaim, disabled }) => {
  return (
    <button
      onClick={handleClaim}
      disabled={disabled}
      className={`bg-blue-500 text-white px-6 py-3 rounded-md font-semibold text-lg shadow-md hover:bg-blue-600 transition ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      Claim Coupon
    </button>
  );
};

export default ClaimButton;
