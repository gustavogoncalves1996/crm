import React from "react";

import ExpandLessOutlined from "@material-ui/icons/ExpandLessOutlined";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";

import { OptionEntryComponent } from "./option";
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
  surface100: string;
  surface500: string;
  secondary: string;
}

const SubEntryComp: React.FunctionComponent<Props> = ({
  entry,
  screen,
  clickEntry,
  surface100,
  surface500,
  secondary,
}) => {
  const [open, setOpen] = React.useState(false);

  const hasChildren = React.useMemo(() => !!entry.entries, [entry.entries]);
  const checkIcon = (): React.ReactNode => {
    if (hasChildren) {
      return open ? <ExpandLessOutlined /> : <ExpandMoreOutlined />;
    }
    return null;
  };
  const classname = React.useMemo(
    (): string => (screen === entry.itemId ? "selected" : ""),
    [screen, entry]
  );
  const click = React.useCallback((): void => {
    if (hasChildren) {
      setOpen(!open);
    } else {
      clickEntry(entry.itemId);
    }
  }, [hasChildren, open, entry, setOpen, clickEntry]);

  return (
    <SubEntryContainer key={entry.itemId || entry.title}>
      <SubEntryMain
        onClick={click}
        secondary={secondary}
        surface500={surface500}
        surface100={surface100}
        className={classname}
      >
        {entry.icon && entry.icon()}
        <SubEntryText secondary={secondary}>{entry.title}</SubEntryText>
        {checkIcon()}
      </SubEntryMain>
      {hasChildren && (
        <SubEntryOptions open={open}>
          {entry.entries?.map((subEntry) => (
            <OptionEntryComponent
              key={subEntry.itemId || subEntry.title}
              entry={subEntry}
              clickEntry={clickEntry}
              screen={screen}
              surface100={surface100}
              surface500={surface500}
              secondary={secondary}
            />
          ))}
        </SubEntryOptions>
      )}
    </SubEntryContainer>
  );
};

const areEqual = (prevProps: Props, nextProps: Props): boolean =>
  prevProps.entry === nextProps.entry &&
  prevProps.screen === nextProps.screen &&
  prevProps.surface100 === nextProps.surface100 &&
  prevProps.surface500 === nextProps.surface500 &&
  prevProps.secondary === nextProps.secondary &&
  prevProps.clickEntry === nextProps.clickEntry;

export const SubEntryComponent = React.memo(SubEntryComp, areEqual);
