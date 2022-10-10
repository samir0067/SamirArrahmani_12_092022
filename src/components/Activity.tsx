import React, { FC, Fragment } from "react";
import { Bar, BarChart, CartesianGrid, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { SessionsActivity } from "utils/types";
import { CustomTooltip } from "components/CustomTooltip";
import ovalBlack from "assets/ovalBlack.svg";
import ovalRed from "assets/ovalRed.svg";

type ActivityProps = {
  sessions: SessionsActivity[];
};

const Activity: FC<ActivityProps> = ({ sessions }: ActivityProps) => {
  return (
    <Fragment>
      <div className="headerActivity">
        <h4>Activité quotidienne</h4>
        <div className="headerActivity_legend">
          <p>
            <img src={ovalBlack} alt="point noir" />
            Poids (kg)
          </p>
          <p>
            <img src={ovalRed} alt="point rouge" />
            Calories brûlées (kCal)
          </p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart width={300} height={180} barGap={6} data={sessions}>
          <CartesianGrid vertical={false} strokeDasharray={3} />
          <YAxis
            yAxisId={1}
            dataKey="kilogram"
            axisLine={false}
            tickLine={false}
            orientation="right"
            domain={["dataMin - 5", "dataMax + 1"]}
          />
          <YAxis yAxisId={2} dataKey="calories" domain={["auto"]} />
          <XAxis tickLine={false} interval={0} />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            yAxisId={1}
            dataKey="kilogram"
            unit="kg"
            barSize={7}
            fill="#282D30"
            shape={<Rectangle radius={[3.5, 3.5, 0, 0]} />}
          />
          <Bar
            yAxisId={2}
            dataKey="calories"
            unit="KCal"
            barSize={7}
            fill="#E60000"
            shape={<Rectangle radius={[3.5, 3.5, 0, 0]} />}
          />
        </BarChart>
      </ResponsiveContainer>
    </Fragment>
  );
};

export default Activity;
