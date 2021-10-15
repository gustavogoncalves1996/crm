import styled from "styled-components";

interface StyledProps {
  color: string;
}

export const Sidebar = styled.div`
  width: 0px;
  overflow: hidden;
  background-size: 200%;
  background-position: 0 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transition: 300ms ease-in-out;
  z-index: 100;
  overflow: hidden;

  &.sidebar--expanded {
    width: 250px !important;
    background-size: 100%;
    background-position: 0 0;
  }

  &:hover {
    background-position: 0 0;
  }
`;

export const Shape = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 400px;
  ${(props: StyledProps): string =>
    `background: linear-gradient(${props.color} 100%, transparent);`}
  border-radius: 100%;
  margin-left: -142px;
  margin-top: -200px;
  z-index: -1;
  opacity: 0;
  transform: scale(0.4) translateY(-400px) translateX(250px);
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
    margin-left: -142px;
    margin-top: -200px;
    opacity: 0.4;
    transform: scale(1) translateY(0);

    &:nth-child(2) {
      animation: float 20s infinite alternate;
      transform: scale(1) translateY(100px) translateX(170px);
    }
  }
`;

export const TopArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 220px;
  padding: 24px;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  box-sizing: border-box;
  background-image: url(https://www.svgrepo.com/show/63886/avatar.svg);
  background-position: center center;
  background-size: cover;
`;

export const Name = styled.h3`
  font-size: 16px;
  margin-top: 12px;
  cursor: default;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${(props: StyledProps): string => `color: ${props.color};`}
`;

export const Job = styled.h4`
  font-size: 14px;
  cursor: default;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${(props: StyledProps): string => `color: ${props.color};`}
`;

export const BottomArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  height: calc(100% - 248px);
  padding: 0px 24px;
  margin-bottom: 24px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
