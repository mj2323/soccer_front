"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("https://soccer-api-mih7.onrender.com/matches/week")
      .then(res => res.json())
      .then(data => setMatches(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>⚽ 이번 주 경기</h1>

      {matches.map((m, i) => (
        <div key={i} style={{
          border: "1px solid #ccc",
          marginBottom: "10px",
          padding: "10px",
          borderRadius: "10px"
        }}>
          <h3>{m.home} vs {m.away}</h3>
          <p>📅 {m.date}</p>
          <p>🔥 승률: {m.winRate.home}% vs {m.winRate.away}%</p>
        </div>
      ))}
    </div>
  );
}