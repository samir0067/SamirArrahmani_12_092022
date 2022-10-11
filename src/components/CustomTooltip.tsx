import React, { FC } from "react";
import { TooltipProps } from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

/**
 * Customized tooltip
 * @param { boolean } active define if active or not
 * @param { <ValueType, NameType>[] } payload return the information
 */
export const CustomTooltip: FC<TooltipProps<ValueType, NameType>> = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className={`customTooltip ${payload[0].unit === " min" ? "bgColorWhite" : ""}`}>
        {payload[0] ? <p>{`${payload[0].value}${payload[0].unit}`}</p> : null}
        {payload[1] ? <p>{`${payload[1].value}${payload[1].unit}`}</p> : null}
      </div>
    );
  }

  return null;
};
