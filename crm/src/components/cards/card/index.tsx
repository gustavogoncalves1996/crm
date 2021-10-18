import React from "react";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

import { ThemeProps } from "../../../App";

import {
  Border,
  Card,
  CardContent,
  CardHeader,
  Description,
  HeaderText,
  Title,
} from "./styles";

interface Gradient {
  initial: string;
  final: string;
}

interface Props {
  title?: string;
  open?: boolean;
  description?: string;
  gradient?: Gradient;
  color?: string;
  containerStyle?: React.CSSProperties;
  theme: ThemeProps[];
  children: React.ReactChild | React.ReactChild[];
}

const CardComp: React.FunctionComponent<Props> = ({
  open = false,
  title = "Titulo importante",
  description = "€10,500",
  gradient,
  color,
  containerStyle,
  theme,
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(open);
  const background = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "surface-color")?.value ||
      "rgb(255, 255, 255)",
    [theme]
  );
  const backgroundColor = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "background-color")?.value ||
      "rgba(245, 242, 235, 1)",
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
  const textColor = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "text-primary-text-color")?.value ||
      "rgb(102, 102, 102)",
    [theme]
  );
  const toggler = React.useMemo(
    () => ({
      margin: "auto 0px",
      cursor: "pointer",
      transition: "all .4s",
      transform: `rotate(${isOpen ? -90 : 90}deg)`,
      color: textColor,
    }),
    [isOpen, textColor]
  );
  const toggle = React.useCallback(
    () => setIsOpen((value) => !value),
    [setIsOpen]
  );

  return (
    <Card style={container}>
      <CardHeader>
        <Border style={style} />
        <HeaderText>
          <Title color={textColor}>{title}</Title>
          <Description color={textColor}>{description}</Description>
        </HeaderText>
        <ArrowForwardIosOutlinedIcon onClick={toggle} style={toggler} />
      </CardHeader>
      {isOpen ? (
        <CardContent border={backgroundColor}>{children}</CardContent>
      ) : null}
    </Card>
  );
};

export const CardComponent = React.memo(CardComp);
