import React from "react";

import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";

import {
  Avatar,
  //   LeftLinks,
  Link,
  Navigation,
  RightLinks,
  SidebarToggler,
} from "./styles";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const sidebarToggler = (
  open: boolean,
  setOpen: (value: boolean) => void
): React.ReactNode => {
  const toggle = (): void => {
    setOpen(!open);
  };
  const classname = open ? "active" : "";

  return (
    <SidebarToggler className={classname} onClick={toggle}>
      <span className={classname} />
      <span className={classname} />
      <span className={classname} />
    </SidebarToggler>
  );
};

export const NavigationBarComponent: React.FunctionComponent<Props> = (
  props
) => {
  return (
    <Navigation>
      {sidebarToggler(props.open, props.setOpen)}
      {/* <LeftLinks>
        <Link href="#">
          <i
            className="example-icon"
            style={{
              backgroundColor: "#f2f2f2",
              width: 24,
              height: 24,
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
        </Link>
        <Link href="#">
          <i
            className="example-icon"
            style={{
              backgroundColor: "#f2f2f2",
              width: 24,
              height: 24,
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
        </Link>
        <Link href="#">
          <i
            className="example-icon"
            style={{
              backgroundColor: "#f2f2f2",
              width: 24,
              height: 24,
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
        </Link>
      </LeftLinks> */}
      <RightLinks>
        <Link href="#">
          <NotificationsNoneOutlinedIcon
            style={{
              color: "#f2f2f2",
              width: 24,
              height: 24,
            }}
          />
        </Link>
        <Link href="#">
          <SettingsOutlinedIcon
            style={{
              color: "#f2f2f2",
              width: 24,
              height: 24,
            }}
          />
        </Link>
        <Link href="#">
          <Avatar>
            <img src="https://www.svgrepo.com/show/63886/avatar.svg" alt="" />
          </Avatar>
        </Link>
      </RightLinks>
    </Navigation>
  );
};
