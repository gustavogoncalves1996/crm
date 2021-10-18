import styled from "styled-components";

interface StyledProps {
  color?: string;
  border?: string;
}

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 650px;
  min-width: 450px;
  box-shadow: 0px 3px 8px rgb(0 0 0 / 10%), 0 6px 7px rgb(0 0 0 / 10%);
  border-radius: 6px;
  margin: 16px auto;

  @media (max-width: 800px) {
    padding: 26px 16px 16px;
  }

  @media (max-width: 500px) {
    min-width: 350px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding: 16px 12px 12px;
  width: 100%;
  overflow: hidden;
  border-radius: 6px;
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
  overflow: hidden;
`;

export const Border = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
`;

export const Title = styled.div`
  font-size: 14px;
  cursor: default;
  font-weight: 500;
  font-family: "Fira Sans", sans-serif;
  ${(props: StyledProps): string => `color: ${props.color};`}
`;

export const Description = styled.span`
  cursor: default;
  font-size: 12px;
  font-family: "Fira Sans", sans-serif;
  ${(props: StyledProps): string => `color: ${props.color};`}
`;

export const CardContent = styled.div`
  padding: 12px;
  ${(props: StyledProps): string => `border-top: 2px solid ${props.border};`};
`;
