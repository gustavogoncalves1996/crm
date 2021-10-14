import React from "react";

import { Nav, NavigationSidebar } from "./styles";
import EntryComponent from "./entry";
import { Screens } from "../../App";

interface Entry {
  icon?: () => React.ReactNode;
  title: string;
  itemId: Screens;
  entries?: Entry[];
}

interface Props {
  entries: Entry[];
  screen: Screens;
  clickEntry: (value: Screens) => void;
}

export const NavigationSidebarComponent: React.FunctionComponent<Props> = ({
  entries,
  screen,
  clickEntry,
}) => {
  // TODO: em ecrãs mais pequenos a sidebar vai ser só os icons e o burguer menu tem de desaparecer da navbar
  return (
    <NavigationSidebar>
      <Nav>
        {entries.map((entry) => (
          <EntryComponent
            entry={entry}
            clickEntry={clickEntry}
            screen={screen}
          />
        ))}
      </Nav>
    </NavigationSidebar>
  );
};
