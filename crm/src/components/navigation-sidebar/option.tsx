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
  surface100: string;
  surface500: string;
  secondary: string;
}

const OptionEntryComp: React.FunctionComponent<Props> = ({
  entry,
  screen,
  clickEntry,
  surface100,
  surface500,
  secondary,
}) => {
  const classname = React.useMemo(
    (): string => (screen === entry.itemId ? "selected" : ""),
    [screen, entry]
  );
  const click = React.useCallback((): void => {
    clickEntry(entry.itemId);
  }, [clickEntry, entry]);

  return (
    <OptionEntryContainer>
      <OptionEntryMain
        onClick={click}
        surface100={surface100}
        surface500={surface500}
        secondary={secondary}
        className={classname}
      >
        {entry.icon && entry.icon()}
        <OptionEntryText secondary={secondary}>{entry.title}</OptionEntryText>
      </OptionEntryMain>
    </OptionEntryContainer>
  );
};

const areEqual = (prevProps: Props, nextProps: Props): boolean =>
  prevProps.entry === nextProps.entry &&
  prevProps.screen === nextProps.screen &&
  prevProps.surface100 === nextProps.surface100 &&
  prevProps.surface500 === nextProps.surface500 &&
  prevProps.secondary === nextProps.secondary &&
  prevProps.clickEntry === nextProps.clickEntry;

export const OptionEntryComponent = React.memo(OptionEntryComp, areEqual);
