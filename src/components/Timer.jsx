import React, { useEffect, useState } from "react";

const Timer = ({ timeLeft }) => {
  const [countdown, setCountdown] = useState(timeLeft);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => setCountdown(countdown - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [countdown]);

  return (
    <div className="text-red-500 font-semibold mt-4">
      {countdown > 0 ? `You can claim again in ${countdown} seconds.` : ""}
    </div>
  );
};

export default Timer;
