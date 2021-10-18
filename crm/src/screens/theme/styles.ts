import styled from "styled-components";

interface StyledProps {
  color?: string;
}

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 54px);
  padding: 24px;
  box-sizing: border-box;
  overflow-y: auto;
  padding: 24px;
`;

export const Full = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0px 32px;
  justify-content: center;
  width: 100%;

  @media (max-width: 800px) {
    padding: 0px 0px 16px;
  }
`;

export const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CustomColorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.div`
  line-height: 14px;
  font-size: 12px;
  cursor: default;
  ${(props: StyledProps): string =>
    !!props.color ? `color: ${props.color};` : ""}
  padding-right: 15px;
  font-family: "Fira Sans", sans-serif;
  font-weight: 500;
`;
