import React from "react";

import { Nav, NavigationSidebar } from "./styles";
import { EntryComponent } from "./entry";
import { Screens, ThemeProps } from "../../App";

interface Entry {
  icon?: () => React.ReactNode;
  title: string;
  itemId: Screens;
  entries?: Entry[];
}

interface Props {
  entries: Entry[];
  screen: Screens;
  theme: ThemeProps[];
  clickEntry: (value: Screens) => void;
}

export const NavigationSidebarComp: React.FunctionComponent<Props> = ({
  entries,
  screen,
  clickEntry,
  theme,
}) => {
  const surface100 = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "surface-color-100")?.value ||
      "rgba(255, 255, 255, 0.1)",
    [theme]
  );
  const surface500 = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "surface-color-500")?.value ||
      "rgba(255, 255, 255, 0.5)",
    [theme]
  );
  const secondary = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "text-secondary-color")?.value ||
      "rgba(255, 255, 255, 1)",
    [theme]
  );
  return (
    <NavigationSidebar>
      <Nav>
        {entries.map((entry) => (
          <EntryComponent
            key={entry.itemId || entry.title}
            entry={entry}
            clickEntry={clickEntry}
            screen={screen}
            surface100={surface100}
            surface500={surface500}
            secondary={secondary}
          />
        ))}
      </Nav>
    </NavigationSidebar>
  );
};

const areEqual = (prevProps: Props, nextProps: Props): boolean =>
  prevProps.screen === nextProps.screen &&
  prevProps.entries === nextProps.entries &&
  prevProps.clickEntry === nextProps.clickEntry &&
  prevProps.theme === nextProps.theme;

export const NavigationSidebarComponent = React.memo(
  NavigationSidebarComp,
  areEqual
);
