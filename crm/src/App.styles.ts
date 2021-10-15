import styled, { createGlobalStyle } from "styled-components";

import { flexBox } from "./assets";
import { ThemeProps } from "./App";

interface StyledProps {
  color?: string;
}

export const AppContainer = styled.div`
  min-height: 100vh;
  height: auto;
  ${(props: StyledProps): string => `background-color: ${props.color};`}
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
  ${flexBox}
`;

export const getGlobalStyle = (theme: ThemeProps[]) => {
  const background =
    theme.find((entry) => entry.key === "background-color")?.value ||
    "rgba(245, 242, 235, 1)";
  const primary700 =
    theme.find((entry) => entry.key === "color-primary-700")?.value ||
    "rgba(120, 75, 74, 0.7)";

  return createGlobalStyle`
	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Lato, sans-serif;
	}

	html {
		width: 100%;
    	height: 100%;
		font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%
		scroll-behavior: smooth;

		@include respond(tab-land) { // width < 1200?
			font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
		}

		@include respond(tab-port) { // width < 900?
			font-size: 50%; //1 rem = 8px, 8/16 = 50%
		}
		
		@include respond(big-desktop) {
			font-size: 75%; //1rem = 12, 12/16
		}

		*::-webkit-scrollbar-track {
			-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
			border-radius: 10px;
			background-color: ${background};
		}
	  
		*::-webkit-scrollbar {
			width: 8px;
			background-color: ${background};
		}
	  
		*::-webkit-scrollbar-thumb {
			border-radius: 10px;
			-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
			background-color: ${primary700};
		}

		${theme.map(({ key, value }) => `--${key}: ${value};`)}
	}

	body {
		width: 100%;
    	height: 100%;
		box-sizing: border-box;
		font-family: "Lato", sans-serif;
		font-weight: 400;
		line-height: 1.7;
		overflow-x: hidden !important;
		overflow-y: auto;

		@include respond(tab-port) {
			padding: 0;
		}
	}

	body {
		height: 100%;
		width: 100%;
    	min-width: 0px !important;
		font-family: "Lato", sans-serif;
		font-weight: 400;
		line-height: 1.7;
  	}

	  #root {
		  height: 100%;
	  }
`;
};

export const Main = styled.main`
  display: flex;
  ${(props: StyledProps): string => `background: ${props.color};`}
  width: 100vw;
  height: 100vh;
`;

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
