import React from "react";
import { Screens } from "../../App";

import {
  OptionEntryContainer,
  OptionEntryMain,
  OptionEntryText,
} from "./styles";

interface Entry {
  icon?: () => React.ReactNode;
  title: string;
  itemId: Screens;
  entries?: Entry[];
}

interface Props {
  entry: Entry;
  screen: Screens;
  clickEntry: (value: Screens) => void;
}

const OptionEntryComponent: React.FunctionComponent<Props> = ({
  entry,
  screen,
  clickEntry,
}) => {
  const click = (): void => {
    clickEntry(entry.itemId);
  };

  return (
    <OptionEntryContainer>
      <OptionEntryMain
        onClick={click}
        className={screen === entry.itemId ? "selected" : ""}
      >
        {entry.icon && entry.icon()}
        <OptionEntryText>{entry.title}</OptionEntryText>
      </OptionEntryMain>
    </OptionEntryContainer>
  );
};

export default OptionEntryComponent;
