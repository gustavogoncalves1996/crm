import React from "react";

import { Screens } from "../../App";
import { Body } from "./styles";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  screen: string;
  setScreen: (value: Screens) => void;
}

export const OuputsManagement: React.FunctionComponent<Props> = ({
  open,
  setOpen,
  screen,
  setScreen,
}) => {
  return <Body>Gestão saídas</Body>;
};
