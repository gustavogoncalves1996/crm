import React from "react";
import { ColorResult } from "react-color";

import { ThemeProps } from "../../App";
import { CardComponent, ColorPicker, Types } from "../../components";
import { Body, CircleWrapper, CustomColorWrapper, Text } from "./styles";

interface Props {
  setTheme: (theme: ThemeProps[]) => void;
  theme: ThemeProps[];
}

const ThemeManagementScreen: React.FunctionComponent<Props> = ({
  setTheme,
  theme,
}) => {
  const onChangeTheme = React.useCallback(
    (color: ColorResult): void => {
      const array = new Array(10).fill("");
      const final = array.reduce((accum, item, index) => {
        if (index === 0) {
          return [
            ...accum,
            {
              key: "color-primary",
              value: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${
                index + 1
              })`,
            },
          ];
        }

        return [
          ...accum,
          {
            key: `color-primary-${index * 100}`,
            value: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, 0.${
              index + 1
            })`,
          },
        ];
      }, []);
      const filtered = theme.filter(
        (entry) => !entry.key.includes("color-primary")
      );

      setTheme([...final, ...filtered]);
    },
    [theme, setTheme]
  );
  const color = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "color-primary")?.value ||
      "rgba(69, 132, 227, 1)",
    [theme]
  );
  const textColor = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "text-primary-text-color")?.value ||
      "rgb(102,102,102)",
    [theme]
  );
  return (
    <Body>
      <CardComponent
        open
        title="Cores predefinidas"
        description="Selecione uma das cores abaixo para definir o tema da aplicação"
        color={color}
        theme={theme}
      >
        <CircleWrapper>
          <ColorPicker
            type={Types.circle}
            color={color}
            onChange={onChangeTheme}
          />
        </CircleWrapper>
      </CardComponent>
      <CardComponent
        open
        title="Cores customizáveis"
        description="Escolha uma cor a seu gosto para ser usada na aplicação"
        color={color}
        theme={theme}
      >
        <CustomColorWrapper>
          <Text color={textColor}>Selecione uma cor:</Text>
          <ColorPicker
            type={Types.sketch}
            color={color}
            onChange={onChangeTheme}
          />
        </CustomColorWrapper>
      </CardComponent>
    </Body>
  );
};

const areEqual = (prevProps: Props, nextProps: Props): boolean =>
  prevProps.setTheme === nextProps.setTheme &&
  prevProps.theme === nextProps.theme;

export const ThemeManagement = React.memo(ThemeManagementScreen, areEqual);
