import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  box-shadow: 2px 10px 20px rgb(0 0 0 / 10%);
  border-radius: 7px;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 30px 25px 20px;
  height: 166px;
  flex-grow: 1;
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
  color: #6c6c6c;
  font-size: 20px;
`;

export const Description = styled.span`
  display: block;
  font-weight: 600;
  font-size: 40px;
  color: #323c43;
`;