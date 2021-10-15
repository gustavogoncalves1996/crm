import React from "react";
import { ThemeProps } from "../../../App";

import { Border, Card, Description, Title } from "./styles";

interface Gradient {
  initial: string;
  final: string;
}

interface Props {
  title?: string;
  description?: string;
  gradient?: Gradient;
  color?: string;
  containerStyle?: React.CSSProperties;
  theme: ThemeProps[];
}

const SmallCard: React.FunctionComponent<Props> = ({
  title = "Titulo importante",
  description = "€10,500",
  gradient,
  color,
  containerStyle,
  theme,
}) => {
  const background = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "surface-color")?.value ||
      "rgb(255, 255, 255)",
    [theme]
  );
  const container = React.useMemo(
    () =>
      ({
        background,
        ...containerStyle,
      } ?? {
        background,
      }),
    [background, containerStyle]
  );
  const style = React.useMemo(
    () => ({
      background: !!gradient
        ? `linear-gradient(82.59deg, ${gradient.initial} 0%, ${gradient.final} 100%)`
        : color,
    }),
    [gradient, color]
  );

  const titleColor = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "text-primary-text-color")?.value ||
      "rgb(51, 51, 51)",
    [theme]
  );

  const textColor = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "text-primary-title-color")?.value ||
      "rgb(102, 102, 102)",
    [theme]
  );

  return (
    <Card style={container}>
      <Border style={style} />
      <Title color={titleColor}>{title}</Title>
      <Description color={textColor}>{description}</Description>
    </Card>
  );
};

export const SmallCardComponent = React.memo(SmallCard);
