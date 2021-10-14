import React from "react";

import ExpandLessOutlined from "@material-ui/icons/ExpandLessOutlined";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";

import OptionEntryComponent from "./option";
import { Screens } from "../../App";
import {
  SubEntryContainer,
  SubEntryMain,
  SubEntryOptions,
  SubEntryText,
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

const SubEntryComponent: React.FunctionComponent<Props> = ({
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
  console.log("PQP 1 => ", entry?.entries?.length ?? 0);
  return (
    <SubEntryContainer key={`${entry.itemId}_${entry.title}`}>
      <SubEntryMain
        onClick={click}
        className={screen === entry.itemId ? "selected" : ""}
      >
        {entry.icon && entry.icon()}
        <SubEntryText>{entry.title}</SubEntryText>
        {checkIcon()}
      </SubEntryMain>
      {hasChildren && (
        <SubEntryOptions open={open}>
          {entry.entries?.map((subEntry) => (
            <OptionEntryComponent
              entry={subEntry}
              clickEntry={clickEntry}
              screen={screen}
            />
          ))}
        </SubEntryOptions>
      )}
    </SubEntryContainer>
  );
};

export default SubEntryComponent;
