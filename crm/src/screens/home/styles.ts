import styled from "styled-components";

interface StyledProps {
  open: boolean;
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

export const ContainerHalf = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;

  ${(props: StyledProps): string =>
    props.open
      ? `
    flex-direction: column;
    flex-wrap: wrap;
  `
      : ""}

  @media (max-width: 599px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const Half = styled.div`
  width: 100%;
  height: 400px;
  box-shadow: 0px 3px 8px rgb(0 0 0 / 10%), 0 6px 7px rgb(0 0 0 / 10%);
  border-radius: 6px;

  &:first-child {
    margin-right: 1rem;

    ${(props: StyledProps): string => (props.open ? "margin-right: 0rem;" : "")}

    @media (max-width: 599px) {
      margin-right: 0rem;
    }
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    height: 300px;
  }

  ${(props: StyledProps): string =>
    props.open
      ? `
      height: 400px;
      margin-top: 0rem !important;
      margin-bottom: 3rem;
  `
      : ""}

  @media (max-width: 599px) {
    height: 400px;
    margin-top: 0rem !important;
    margin-bottom: 3rem;
  }
`;
