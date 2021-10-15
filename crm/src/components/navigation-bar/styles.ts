import styled from "styled-components";

interface StyledProps {
  primary?: string;
  surface?: string;
  surface100?: string;
}

export const Navigation = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 54px;
  box-shadow: 0px 3px 8px rgb(0 0 0 / 10%), 0 6px 7px rgb(0 0 0 / 10%);
  transform: translateZ(1px);
  ${(props: StyledProps): string => `background-color: ${props.primary};`}
`;

export const SidebarToggler = styled.nav`
  width: 54px;
  height: 54px;
  border: 0;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  transition: background-color 64ms ease-out;
  cursor: pointer;
  ${(props: StyledProps): string => `background-color: ${props.primary};`}

  &:hover {
    ${(props: StyledProps): string => `background-color: ${props.surface100};`}
  }

  &:active {
    ${(props: StyledProps): string => `background-color: ${props.surface100};`}
  }

  &.active {
    & > span:nth-child(1) {
      transform: translateY(0.45rem) rotate(-45deg);
    }
    & > span:nth-child(2) {
      opacity: 0;
    }
    & > span:nth-child(3) {
      transform: translateY(-0.45rem) rotate(45deg);
    }
  }

  & > span {
    ${(props: StyledProps): string => `background-color: ${props.surface};`}
    width: 20px;
    height: 0.2rem;
    margin-bottom: 0.3rem;
    display: block;
    transition: transform 128ms ease-out 256ms, opacity 128ms ease-out 246ms;

    &:last-child {
      margin-bottom: 0;
    }

    &.active {
      height: 0.15rem;
    }
  }
`;

export const LeftLinks = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 54px;
`;

export const RightLinks = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 54px;
  margin-left: auto;
`;

export const Link = styled.a`
  ${(props: StyledProps): string => `background-color: ${props.primary};`}
  width: 64px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 64ms ease-out;

  &:hover {
    ${(props: StyledProps): string => `background-color: ${props.surface100};`}
  }
`;

export const Avatar = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50em;
  width: 36px;
  height: 36px;
  font-size: 14.4px;

  > img {
    width: 100%;
    height: auto;
    border-radius: 50em;
  }
`;
