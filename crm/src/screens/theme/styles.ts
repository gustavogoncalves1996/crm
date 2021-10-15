import styled from "styled-components";

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
