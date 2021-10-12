import React from "react";

import { Shape, Sidebar } from "./styles";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const renderShapes = (): React.ReactNode => {
  return (
    <>
      <Shape />
      <Shape />
    </>
  );
};

export const SidebarComponent: React.FunctionComponent<Props> = (
  props: Props
) => {
  const toggle = (): void => {
    props.setOpen(!props.open);
  };

  return (
    <Sidebar
      className={`sidebar ${props.open && "sidebar--expanded"}`}
      onClick={toggle}
    >
      {renderShapes()}
    </Sidebar>
  );
};
