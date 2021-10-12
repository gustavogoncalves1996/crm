import React from "react";

// import {
//   ListSubheader,
//   List,
//   ListItemIcon,
//   ListItemText,
//   Collapse,
// } from "@material-ui/core";

// import SendRoundedIcon from "@material-ui/icons/SendRounded";
// import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
// import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";
// import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
// import DraftsRoundedIcon from "@material-ui/icons/DraftsRounded";
// import MoveToInboxRoundedIcon from "@material-ui/icons/MoveToInboxRounded";
import { TreeComponent } from "..";
import {
  Avatar,
  BottomArea,
  Job,
  Name,
  Shape,
  Sidebar,
  TopArea,
} from "./styles";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const renderShapes = (): React.ReactNode => {
  return (
    <>
      <Shape />
      {/* <Shape /> */}
    </>
  );
};

export const SidebarComponent: React.FunctionComponent<Props> = (
  props: Props
) => {
  // TODO: em ecrãs mais pequenos a sidebar vai ser só os icons e o burguer menu tem de desaparecer da navbar
  return (
    <Sidebar className={`sidebar ${props.open && "sidebar--expanded"}`}>
      {renderShapes()}
      <TopArea>
        <Avatar />
        <Name>Pedro Torres</Name>
        <Job>Software developer</Job>
      </TopArea>
      <BottomArea>
        <TreeComponent entries={[]} />
      </BottomArea>
    </Sidebar>
  );
};
