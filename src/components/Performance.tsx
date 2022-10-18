import React, { FC, Fragment } from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { SessionsPerformance } from "utils/types";

type PerformanceProps = {
  performance: SessionsPerformance[];
};

/**
 * displays the performance of the day
 * @param performance
 * @constructor
 */
const Performance: FC<PerformanceProps> = ({ performance }: PerformanceProps) => {
  const kindFr = {
    1: "Intensité",
    2: "Vitesse",
    3: "Force",
    4: "Endurance",
    5: "Énergie",
    6: "Cardio",
  };

  const formatKind = (indexKind: number) => {
    return kindFr[indexKind as keyof typeof kindFr];
  };

  return (
    <Fragment>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart className="radarChart" cx="50%" cy="50%" outerRadius="65%" data={performance}>
          <PolarGrid className="radarChart_polarGrid" radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="#ffffff"
            tickLine={false}
            axisLine={false}
            tickFormatter={formatKind}
          />
          <Radar dataKey="value" name="Performance" fill="rgba(255, 1, 1, 0.7)" />
        </RadarChart>
      </ResponsiveContainer>
    </Fragment>
  );
};

export default Performance;
