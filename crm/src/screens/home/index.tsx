import React from "react";

import { ChartComponent, SmallCardComponent } from "../../components";
import { Screens } from "../../App";
import { Body, ContainerHalf, Full, Half } from "./styles";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  screen: string;
  setScreen: (value: Screens) => void;
}

export const Home: React.FunctionComponent<Props> = ({
  open,
  setOpen,
  screen,
  setScreen,
}) => {
  return (
    <Body>
      <Full>
        <SmallCardComponent
          gradient={{ initial: "#113873", final: "#4584E3" }}
        />
        <SmallCardComponent
          containerStyle={{ margin: "0px 20px" }}
          gradient={{ initial: "#4584E3", final: "#689BE8" }}
        />
        <SmallCardComponent
          gradient={{ initial: "#689BE8", final: "#8CB3EE" }}
        />
      </Full>
      <ContainerHalf open={open}>
        <Half open={open}>
          <ChartComponent series={10} dataType="time" />
        </Half>
        <Half open={open}>
          <ChartComponent series={3} dataType="ordinal" />
        </Half>
      </ContainerHalf>
    </Body>
  );
};