import React from "react";

import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import { ThemeProps } from "../../App";
import { CardComponent } from "../../components";
import { Body } from "./styles";

interface Props {
  theme: ThemeProps[];
}

const AccountManagementScreen: React.FunctionComponent<Props> = ({ theme }) => {
  const color = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "color-primary")?.value ||
      "rgba(69, 132, 227, 1)",
    [theme]
  );
  const CssTextField = React.useMemo(
    () =>
      withStyles({
        root: {
          marginBottom: "12px",
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: color,
            },
          },
        },
      })(TextField),
    [color]
  );

  return (
    <Body>
      <CardComponent
        open
        title="Informação conta"
        description="Atualize as suas informações pessoais"
        color={color}
        theme={theme}
      >
        <CssTextField label="Name" fullWidth size="small" variant="outlined" />
        <CssTextField label="Email" fullWidth size="small" variant="outlined" />
        <CssTextField label="Phone" size="small" variant="outlined" />
      </CardComponent>
    </Body>
  );
};

const areEqual = (prevProps: Props, nextProps: Props): boolean =>
  prevProps.theme === nextProps.theme;

export const AccountManagement = React.memo(AccountManagementScreen, areEqual);
