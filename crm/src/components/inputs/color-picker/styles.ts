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
  height: 28px;
  width: 28px;
  border-radius: 50%;
  border: none;
  ${(props: StyledProps): string => `background: ${props.color};`}

  &:hover {
    transform: scale(1.2);
    transition: transform 100ms ease 0s;
  }
`;
