import React, { useState } from "react";
import ClaimButton from "../components/ClaimButton";
import CouponDisplay from "../components/CouponDisplay";
import Timer from "../components/Timer";
import axios from "axios";
import { motion } from "framer-motion";

const Home = () => {
  const [coupon, setCoupon] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClaim = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://coupon-backend-2ev9.onrender.com/api/coupons/claim-coupon"
      );

      setCoupon(response.data.coupon);
      setLoading(false);

      if (response.data.timeLeft) {
        setTimeLeft(response.data.timeLeft);
        setDisabled(true);
        setTimeout(() => setDisabled(false), response.data.timeLeft * 1000);
      }
    } catch (error) {
      setLoading(false);
      setError("❌ Error claiming coupon. Try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-400 to-blue-500 p-6">
      <motion.h1
        className="text-4xl font-extrabold text-white mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🎉 Round-Robin Coupon Giveaway 🎟️
      </motion.h1>

      <p className="text-lg text-white mb-4">
        Claim your exclusive discount coupon now! 🚀
      </p>

      <ClaimButton handleClaim={handleClaim} disabled={disabled || loading} />

      {loading && (
        <div className="mt-4">
          <div className="w-8 h-8 border-4 border-white border-dashed rounded-full animate-spin"></div>
        </div>
      )}

      {coupon && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
        >
          <CouponDisplay coupon={coupon} />
        </motion.div>
      )}

      {timeLeft > 0 && <Timer timeLeft={timeLeft} />}

      {error && (
        <motion.div
          className="mt-4 text-red-500 font-semibold bg-white p-3 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {error}
        </motion.div>
      )}
    </div>
  );
};

export default Home;
