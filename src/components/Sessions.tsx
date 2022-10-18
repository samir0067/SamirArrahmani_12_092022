import React, { FC, Fragment } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { SessionsAverage } from "utils/types";
import { CustomTooltip } from "components/CustomTooltip";

type SessionsProps = {
  averageSessions: SessionsAverage[];
};

/**
 * average session duration in the form of a LineChart.
 * @param averageSessions
 * @constructor
 */
const Sessions: FC<SessionsProps> = ({ averageSessions }: SessionsProps) => {
  return (
    <Fragment>
      <h3 className="titleSessions">
        Durée moyenne des <br />
        sessions
      </h3>
      <LineChart width={258} height={186} data={averageSessions} margin={{ bottom: 15 }}>
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          padding={{ left: 10, right: 10 }}
          tick={{ fill: "rgba(255,255,255,0.5)" }}
          tickFormatter={(value) => {
            const ticks = ["L", "M", "M", "J", "V", "S", "D"];
            return ticks[value - 1];
          }}
        />
        <YAxis hide dataKey="sessionLength" domain={["dataMin - 15", "dataMax + 5"]} />
        <Tooltip content={<CustomTooltip />} />
        <Line dataKey="sessionLength" dot={false} unit=" min" type="natural" stroke="#ffffff" activeDot={{ r: 2 }} />
      </LineChart>
    </Fragment>
  );
};

export default Sessions;
