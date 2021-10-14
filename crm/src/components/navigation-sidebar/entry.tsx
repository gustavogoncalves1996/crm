import React from "react";

import ExpandLessOutlined from "@material-ui/icons/ExpandLessOutlined";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";

import SubEntryComponent from "./sub-entry";
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
}

const EntryComponent: React.FunctionComponent<Props> = ({
  entry,
  screen,
  clickEntry,
}) => {
  const [open, setOpen] = React.useState(false);

  const hasChildren = !!entry.entries;
  const checkIcon = (): React.ReactNode => {
    if (hasChildren) {
      return open ? <ExpandLessOutlined /> : <ExpandMoreOutlined />;
    }
    return null;
  };

  const click = (): void => {
    if (hasChildren) {
      setOpen(!open);
    } else {
      clickEntry(entry.itemId);
    }
  };

  return (
    <EntryContainer key={`${entry.itemId}_${entry.title}`}>
      <EntryMain
        onClick={click}
        className={screen === entry.itemId ? "selected" : ""}
      >
        {entry.icon && entry.icon()}
        <EntryText>{entry.title}</EntryText>
        {checkIcon()}
      </EntryMain>
      {hasChildren && (
        <EntryOptions open={open}>
          {entry.entries?.map((subEntry) => (
            <SubEntryComponent
              key={`${subEntry.itemId}_${subEntry.title}`}
              entry={subEntry}
              screen={screen}
              clickEntry={clickEntry}
            />
          ))}
        </EntryOptions>
      )}
    </EntryContainer>
  );
};

export default EntryComponent;
