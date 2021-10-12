import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 0px;
  transition: 300ms ease-in-out;
  position: relative;
  z-index: 2;

  &.main-content--expanded {
    margin-left: 300px;
    width: calc(100% - 300px);
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
  height: 100%;
  padding: 24px;
`;

export const Full = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0px 32px;
  justify-content: center;
  width: 100%;
`;

export const ContainerHalf = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
`;

export const Half = styled.div`
  flex: 1;
  height: 400px;
  box-shadow: 0 3px 8px rgba(lightgray, 0.1), 0 6px 7px rgba(lightgray, 0.1);
  background: white;

  &:first-child {
    margin-right: 1rem;
  }
`;
