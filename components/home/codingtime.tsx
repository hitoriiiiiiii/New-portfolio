"use client";

import { useEffect, useState } from "react";

export default function CodingTime() {
  const [hours, setHours] = useState("0h 0m");

  useEffect(() => {
    const fetchTime = async () => {
      const res = await fetch("/api/wakatime");
      const data = await res.json();

      const total = data?.data?.[0]?.grand_total?.text;
      setHours(total || "0h 0m");
    };

    fetchTime();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        fontSize: "14px",
        opacity: 0.9,
      }}
    >
      <span>Coding today:</span>
      <span style={{ fontWeight: 900 }}>{hours}</span>
    </div>
  );
}