import React from "react";
import { ColorResult } from "react-color";

import { ThemeProps } from "../../App";
import { ColorPicker, Types } from "../../components";
import { Body, Full } from "./styles";

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
  return (
    <Body>
      Temas
      <Full>
        Temas default
        <ColorPicker
          type={Types.circle}
          color={color}
          onChange={onChangeTheme}
        />
      </Full>
      <Full>
        Temas custom
        <div>
          Cor primária :
          <ColorPicker color={color} onChange={onChangeTheme} />
        </div>
      </Full>
    </Body>
  );
};

const areEqual = (prevProps: Props, nextProps: Props): boolean =>
  prevProps.setTheme === nextProps.setTheme &&
  prevProps.theme === nextProps.theme;

export const ThemeManagement = React.memo(ThemeManagementScreen, areEqual);
