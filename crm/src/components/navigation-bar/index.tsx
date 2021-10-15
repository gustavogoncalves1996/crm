import React from "react";

import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";

import {
  // Avatar,
  //   LeftLinks,
  Link,
  Navigation,
  RightLinks,
  SidebarToggler,
} from "./styles";
import { ThemeProps } from "../../App";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  theme: ThemeProps[];
}

export const NavigationBar: React.FunctionComponent<Props> = ({
  open,
  setOpen,
  theme,
}) => {
  const primary = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "color-primary")?.value ||
      "rgba(69, 132, 227, 1)",
    [theme]
  );
  const surface = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "surface-color")?.value ||
      "rgba(255, 255, 255, 1)",
    [theme]
  );
  const surface100 = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "surface-color-100")?.value ||
      "rgba(255, 255, 255, 0.1)",
    [theme]
  );

  const sidebarToggler = React.useCallback((): React.ReactNode => {
    const toggle = (): void => {
      setOpen(!open);
    };
    const classname = open ? "active" : "";

    return (
      <SidebarToggler
        className={classname}
        primary={primary}
        surface={surface}
        surface100={surface100}
        onClick={toggle}
      >
        <span className={classname} />
        <span className={classname} />
        <span className={classname} />
      </SidebarToggler>
    );
  }, [open, setOpen, primary, surface, surface100]);

  const iconStyle = React.useMemo(
    () => ({
      color:
        theme.find((entry) => entry.key === "background-color")?.value ||
        "rgb(245, 242, 235)",
      width: 24,
      height: 24,
    }),
    [theme]
  );

  return (
    <Navigation primary={primary}>
      {sidebarToggler()}
      <RightLinks>
        <Link href="#" primary={primary} surface100={surface100}>
          <NotificationsNoneOutlinedIcon style={iconStyle} />
        </Link>
        <Link href="#" primary={primary} surface100={surface100}>
          <SettingsOutlinedIcon style={iconStyle} />
        </Link>
        {/* <Link href="#">
          <Avatar>
            <img src="https://www.svgrepo.com/show/63886/avatar.svg" alt="" />
          </Avatar>
        </Link> */}
      </RightLinks>
    </Navigation>
  );
};

const areEqual = (prevProps: Props, nextProps: Props): boolean =>
  prevProps.open === nextProps.open &&
  prevProps.setOpen === nextProps.setOpen &&
  prevProps.theme === nextProps.theme;

export const NavigationBarComponent = React.memo(NavigationBar, areEqual);
