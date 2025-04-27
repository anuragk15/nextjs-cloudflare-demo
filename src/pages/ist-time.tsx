import React from "react";

const IstTimePage = () => {
  const nowInIST = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <main>
      <h1>Current Date and Time in IST (Asia/Kolkata)</h1>
      <p>{nowInIST}</p>
    </main>
  );
};

export default IstTimePage;
