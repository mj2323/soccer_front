"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("https://soccer-api-test.onrender.com/matches")
      .then(res => res.json())
      .then(data => setMatches(data));
  }, []);

  return (
    <div>
      <h1>오늘 경기</h1>

      {matches.map((m, i) => (
        <div key={i}>
          <h3>{m.home} vs {m.away}</h3>
          <p>{m.winRate.home}% vs {m.winRate.away}%</p>
        </div>
      ))}
    </div>
  );
}