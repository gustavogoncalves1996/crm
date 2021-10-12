/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { AxisOptions, Chart } from "react-charts";

import useDemoConfig, { DataType } from "./useDemoConfig";

interface Props {
  series: number;
  dataType: DataType | undefined;
}

export const ChartComponent: React.FunctionComponent<Props> = (
  props: Props
) => {
  const { series, dataType } = props;
  const { data, randomizeData } = useDemoConfig({
    series,
    dataType,
  });

  const primaryAxis = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  return <Chart options={{ data, primaryAxis, secondaryAxes }} />;
};
