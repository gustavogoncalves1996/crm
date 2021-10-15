import styled from "styled-components";

interface StyledProps {
  color: string;
}

export const Body = styled.div`
  display: flex;
  position: relative;
`;

export const Button = styled.button`
  cursor: pointer;
  height: 24px;
  width: 32px;
  border-radius: 6px;
  ${(props: StyledProps): string => `background: ${props.color};`}
`;
