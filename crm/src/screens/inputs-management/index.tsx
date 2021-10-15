import React from "react";

import { Screens } from "../../App";
import { Body } from "./styles";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  screen: string;
  setScreen: (value: Screens) => void;
}

const InputsManagementComp: React.FunctionComponent<Props> = ({
  open,
  setOpen,
  screen,
  setScreen,
}) => {
  return <Body>Gestão entradas</Body>;
};

const areEqual = (prevProps: Props, nextProps: Props): boolean =>
  prevProps.open === nextProps.open &&
  prevProps.setOpen === nextProps.setOpen &&
  prevProps.setScreen === nextProps.setScreen &&
  prevProps.screen === nextProps.screen;

export const InputsManagement = React.memo(InputsManagementComp, areEqual);
