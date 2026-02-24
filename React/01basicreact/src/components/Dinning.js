import React, { useEffect } from "react";

export const Dinning = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      alert("Hello World");
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return <div>Dinning</div>;
};
