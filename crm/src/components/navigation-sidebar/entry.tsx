import React from "react";

import ExpandLessOutlined from "@material-ui/icons/ExpandLessOutlined";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";

import { SubEntryComponent } from "./sub-entry";
import { EntryContainer, EntryMain, EntryOptions, EntryText } from "./styles";
import { Screens } from "../../App";

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

const EntryComp: React.FunctionComponent<Props> = ({
  entry,
  screen,
  clickEntry,
  surface100,
  surface500,
  secondary,
}) => {
  const [open, setOpen] = React.useState(false);

  const hasChildren = React.useMemo(() => !!entry.entries, [entry.entries]);
  const checkIcon = React.useCallback((): React.ReactNode => {
    if (hasChildren) {
      return open ? <ExpandLessOutlined /> : <ExpandMoreOutlined />;
    }
    return null;
  }, [hasChildren, open]);

  const click = React.useCallback((): void => {
    if (hasChildren) {
      setOpen(!open);
    } else {
      clickEntry(entry.itemId);
    }
  }, [entry, hasChildren, open, setOpen, clickEntry]);

  return (
    <EntryContainer key={`${entry.itemId}_${entry.title}`}>
      <EntryMain
        surface100={surface100}
        surface500={surface500}
        secondary={secondary}
        onClick={click}
        className={screen === entry.itemId ? "selected" : ""}
      >
        {entry.icon && entry.icon()}
        <EntryText secondary={secondary}>{entry.title}</EntryText>
        {checkIcon()}
      </EntryMain>
      {hasChildren && (
        <EntryOptions open={open}>
          {entry.entries?.map((subEntry) => (
            <SubEntryComponent
              key={subEntry.itemId || subEntry.title}
              entry={subEntry}
              screen={screen}
              clickEntry={clickEntry}
              surface100={surface100}
              surface500={surface500}
              secondary={secondary}
            />
          ))}
        </EntryOptions>
      )}
    </EntryContainer>
  );
};

const areEqual = (prevProps: Props, nextProps: Props): boolean =>
  prevProps.entry === nextProps.entry &&
  prevProps.screen === nextProps.screen &&
  prevProps.surface100 === nextProps.surface100 &&
  prevProps.surface500 === nextProps.surface500 &&
  prevProps.secondary === nextProps.secondary &&
  prevProps.clickEntry === nextProps.clickEntry;

export const EntryComponent = React.memo(EntryComp, areEqual);
