import React, { FC } from "react";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

type ScoreProps = {
  scoreToday?: number;
};

const Score: FC<ScoreProps> = ({ scoreToday }) => {
  const data = [
    {
      name: "unknown",
      fill: "#ffffff",
      uv: 100,
    },
    {
      name: "unknown",
      fill: "#FF0000",
      uv: scoreToday && scoreToday * 100,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart cx="50%" cy="50%" innerRadius="80%" startAngle={90} endAngle={450} barSize={10} data={data}>
        <RadialBar cornerRadius={10} dataKey="uv" background={{ fill: "#ffffff" }} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default Score;
