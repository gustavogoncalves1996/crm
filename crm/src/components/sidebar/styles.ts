import styled from "styled-components";

export const Sidebar = styled.div`
  width: 0px;
  background-image: linear-gradient(#113873, #478978);
  background-size: 200%;
  background-position: 0 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transition: 300ms ease-in-out;
  z-index: 1;
  overflow: hidden;
  cursor: pointer;

  &.sidebar--expanded {
    width: 300px !important;
    background-size: 100%;
    background-position: 0 0;
  }

  &:hover {
    background-position: 0 0;
  }
`;

export const Shape = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 360px;
  background: linear-gradient(#316cc5 80%, transparent);
  height: 370px;
  border-radius: 100%;
  margin-left: -80px;
  margin-top: -80px;
  z-index: -1;
  opacity: 0;
  transform: scale(0.4) translateY(-400px) translateX(300px);
  margin-left: 0;
  margin-top: 0;
  transition: 400ms ease;

  &:nth-child(2) {
    background: linear-gradient(#78ccfc70 80%, transparent);
    margin-top: 70px;
    margin-left: 50px;
    transform: scale(0.4) translateY(-400px);
    margin-top: 0;
  }

  .sidebar--expanded & {
    animation: float 6s infinite alternate;
    margin-left: -80px;
    margin-top: -80px;
    opacity: 0.4;
    transform: scale(1) translateY(0);

    &:nth-child(2) {
      animation: float 20s infinite alternate;
      transform: scale(1) translateY(100px) translateX(170px);
    }
  }
`;
