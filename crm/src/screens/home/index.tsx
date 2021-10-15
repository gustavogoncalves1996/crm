import React from "react";
import { ThemeProps } from "../../App";

import { ChartComponent, SmallCardComponent } from "../../components";
import { Body, ContainerHalf, Full, Half } from "./styles";

interface Props {
  open: boolean;
  theme: ThemeProps[];
}

const containerStyle = { margin: "0px 20px" };

const HomeScreen: React.FunctionComponent<Props> = ({ open, theme }) => {
  const color1 = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "main-card-color-1")?.value ||
      "rgba(15, 131, 171, 1)",
    [theme]
  );
  const color2 = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "main-card-color-2")?.value ||
      "rgba(250, 164, 58, 1)",
    [theme]
  );
  const color3 = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "main-card-color-3")?.value ||
      "rgba(253, 104, 104, 1)",
    [theme]
  );
  const background = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "surface-color")?.value ||
      "rgba(255, 255, 255, 1)",
    [theme]
  );

  return (
    <Body>
      <Full>
        <SmallCardComponent theme={theme} color={color1} />
        <SmallCardComponent
          theme={theme}
          containerStyle={containerStyle}
          color={color2}
        />
        <SmallCardComponent theme={theme} color={color3} />
      </Full>
      <ContainerHalf open={open}>
        <Half open={open} style={{ background }}>
          <ChartComponent series={10} dataType="time" />
        </Half>
        <Half open={open} style={{ background }}>
          <ChartComponent series={3} dataType="ordinal" />
        </Half>
      </ContainerHalf>
    </Body>
  );
};

const areEqual = (prevProps: Props, nextProps: Props): boolean =>
  prevProps.open === nextProps.open && prevProps.theme === nextProps.theme;

export const Home = React.memo(HomeScreen, areEqual);
