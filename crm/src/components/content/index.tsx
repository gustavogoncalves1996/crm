import React from "react";

import { ChartComponent, NavigationBarComponent, SmallCardComponent } from "..";
import { Body, Container, ContainerHalf, Full, Half } from "./styles";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const ContentComponent: React.FunctionComponent<Props> = ({
  open,
  setOpen,
}) => {
  return (
    <Container
      className={`main-content ${open ? "main-content--expanded" : ""}`}
    >
      <NavigationBarComponent open={open} setOpen={setOpen} />
      <Body>
        <Full>
          <SmallCardComponent
            gradient={{ initial: "#113873", final: "#689BE8" }}
          />
          <SmallCardComponent
            containerStyle={{ margin: "0px 40px" }}
            gradient={{ initial: "#689BE8", final: "#478978" }}
          />
          <SmallCardComponent
            gradient={{ initial: "#478978", final: "#C7DFC5" }}
          />
        </Full>
        <ContainerHalf>
          <Half>
            <ChartComponent series={10} dataType="time" />
          </Half>
          <Half>
            <ChartComponent series={3} dataType="ordinal" />
          </Half>
        </ContainerHalf>
      </Body>
    </Container>
  );
};
