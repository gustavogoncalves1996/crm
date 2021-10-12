import styled from "styled-components";

interface StyledProps {
  open: boolean;
}

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 0px;
  transition: 300ms ease-in-out;
  position: relative;
  z-index: 2;

  &.main-content--expanded {
    margin-left: 250px;
    width: calc(100% - 250px);
  }
`;

export const Header = styled.section`
  height: 5rem;
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0 2rem;

  span {
    width: 16rem;
    height: 2rem;
    background: #e5e5e7;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;

    li {
      width: 6rem;
      height: 2rem;
      margin: 0 1rem;
      background: $dark-grey;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 54px);
  padding: 24px;
  box-sizing: border-box;
  overflow-y: scroll;
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
  background: white;

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
