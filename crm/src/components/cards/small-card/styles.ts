import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--surface-color);
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
  background: linear-gradient(82.59deg, #00c48c 0%, #00a173 100%);
  width: 100%;
  height: 10px;
`;

export const Title = styled.h4`
  color: var(--text-primary-text-color);
  font-size: 20px;
  cursor: default;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: 800px) and (max-width: 1000px) {
    font-size: 18px;
  }

  @media (max-width: 799px) {
    font-size: 16px;
  }
`;

export const Description = styled.span`
  display: block;
  font-weight: 600;
  font-size: 18px;
  color: var(--text-primary-title-color);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: 800px) and (max-width: 1000px) {
    font-size: 16px;
  }

  @media (max-width: 799px) {
    font-size: 14px;
  }
`;
