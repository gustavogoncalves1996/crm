import React from "react";

import { Border, Card, Description, Title } from "./styles";

interface Gradient {
  initial: string;
  final: string;
}

interface Props {
  title?: string;
  description?: string;
  gradient?: Gradient;
  containerStyle?: React.CSSProperties;
}

export const SmallCardComponent: React.FunctionComponent<Props> = ({
  title = "Titulo importante",
  description = "€10,500",
  gradient = {
    initial: "#0084f4",
    final: "#1a4da2",
  },
  containerStyle,
}) => {
  return (
    <Card style={containerStyle ?? {}}>
      <Border
        style={{
          background: `linear-gradient(82.59deg, ${gradient.initial} 0%, ${gradient.final} 100%)`,
        }}
      />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};
