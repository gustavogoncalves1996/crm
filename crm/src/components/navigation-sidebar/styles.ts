import styled from "styled-components";

interface StyledProps {
  open?: boolean;
  primary?: string;
  secondary?: string;
  surface100?: string;
  surface500?: string;
}

export const NavigationSidebar = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const EntryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EntryMain = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  margin: 2px 0px;
  min-height: 35px;
  padding: 8px;
  border-radius: 6px;

  &:hover {
    ${(props: StyledProps): string => `background-color: ${props.surface100};`}
  }

  &.selected {
    ${(props: StyledProps): string => `background-color: ${props.surface500};`}
  }

  > svg {
    width: 20px;
    height: 20px;
    ${(props: StyledProps): string => `color: ${props.secondary};`}
    ${(props: StyledProps): string => `fill: ${props.secondary};`}
  }
`;

export const EntryText = styled.div`
  display: flex;
  flex: 1;
  ${(props: StyledProps): string => `color: ${props.secondary};`}
  padding: 0px 8px;
  font-size: 12px;
`;

export const EntryOptions = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.8s;
  overflow: hidden;

  ${(props: StyledProps): string =>
    props.open
      ? `
      height: auto;
      opacity: 1;
    `
      : `
    height: 0px;
    opacity: 0;
  `}
`;

export const SubEntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 12px;
`;

export const SubEntryMain = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  margin: 2px 0px;
  min-height: 30px;
  padding: 8px;
  border-radius: 6px;

  &.selected {
    ${(props: StyledProps): string => `background-color: ${props.surface500};`}
  }

  &:hover {
    ${(props: StyledProps): string => `background-color: ${props.surface100};`}
  }

  > svg {
    width: 20px;
    height: 20px;
    ${(props: StyledProps): string => `color: ${props.secondary};`}
    ${(props: StyledProps): string => `fill: ${props.secondary};`}
  }
`;

export const SubEntryText = styled.div`
  display: flex;
  flex: 1;
  ${(props: StyledProps): string => `color: ${props.secondary};`}
  padding: 0px 6px;
  font-size: 12px;
`;

export const SubEntryOptions = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.8s;
  overflow: hidden;

  ${(props: StyledProps): string =>
    props.open
      ? `
      height: auto;
      opacity: 1;
    `
      : `
      height: 0px;
      opacity: 0;
    `}
`;

export const OptionEntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 22px;
`;

export const OptionEntryMain = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  margin: 2px 0px;
  min-height: 30px;
  padding: 8px;
  border-radius: 6px;

  &:hover {
    ${(props: StyledProps): string => `background-color: ${props.surface100};`}
  }

  &.selected {
    ${(props: StyledProps): string => `background-color: ${props.surface500};`}
  }

  > svg {
    width: 20px;
    height: 20px;
    ${(props: StyledProps): string => `color: ${props.secondary};`}
  }
`;

export const OptionEntryText = styled.div`
  display: flex;
  flex: 1;
  ${(props: StyledProps): string => `color: ${props.secondary};`}
  padding: 0px 6px;
  font-size: 11px;
`;
