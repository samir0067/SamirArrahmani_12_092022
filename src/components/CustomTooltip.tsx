import React, { FC } from "react";
import { TooltipProps } from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

export const CustomTooltip: FC<TooltipProps<ValueType, NameType>> = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    console.log("payload ==>", payload);
    return (
      <div className={`customTooltip`}>
        <p>{`${payload[0].value}${payload[0].unit}`}</p>
        <p>{`${payload[1].value}${payload[1].unit}`}</p>
      </div>
    );
  }

  return null;
};
