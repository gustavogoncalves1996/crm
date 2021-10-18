import styled from "styled-components";

interface StyledProps {
  color: string;
}

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 3px 8px rgb(0 0 0 / 10%), 0 6px 7px rgb(0 0 0 / 10%);
  border-radius: 7px;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 30px 25px 20px;
  height: 166px;
  flex-grow: 1;

  @media (max-width: 800px) {
    padding: 26px 16px 16px;
  }
`;

export const Border = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
`;

export const Title = styled.h4`
  font-size: 20px;
  cursor: default;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "Fira Sans", sans-serif;
  font-weight: 300;
  ${(props: StyledProps): string => `color: ${props.color};`}

  @media (min-width: 800px) and (max-width: 1000px) {
    font-size: 18px;
  }

  @media (max-width: 799px) {
    font-size: 16px;
  }
`;

export const Description = styled.span`
  display: block;
  font-weight: 500;
  cursor: default;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "Fira Sans", sans-serif;
  ${(props: StyledProps): string => `color: ${props.color};`}

  @media (min-width: 800px) and (max-width: 1000px) {
    font-size: 16px;
  }

  @media (max-width: 799px) {
    font-size: 14px;
  }
`;
