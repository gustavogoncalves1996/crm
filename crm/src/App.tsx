import React from "react";

import { AppContainer, getGlobalStyle, Main, Container } from "./App.styles";
import { SidebarComponent, NavigationBarComponent } from "./components";
import {
  Home,
  InputsManagement,
  OuputsManagement,
  ThemeManagement,
  AccountManagement,
} from "./screens";
import { defaultGlobalColors } from "./helpers";

export interface ModalType {
  open: boolean;
  title: string;
  text: string[];
}

export interface ModalContent {
  pt: string;
  en: string;
}

export interface ModalTeamType {
  open: boolean;
  title: string;
  image: string;
  linkedin: string;
  email: string;
  areas: ModalContent[];
  education: ModalContent[];
  experience: ModalContent[];
  languages: ModalContent[];
}

export interface ThemeProps {
  key: string;
  value: string;
}

export enum Screens {
  empty = "",
  home = "home",
  warehouseIn = "warehouseIn",
  warehouseOut = "warehouseOut",
  laboratory = "laboratory",
  productionTinturaria = "productionTinturaria",
  productionAcabamentos = "productionAcabamentos",
  productionMaquina = "productionMaquina",
  productionOperador = "productionOperador",
  productionFase = "productionFase",
  temas = "temas",
  conta = "conta",
  systemEntities = "systemEntities",
  systemUsers = "systemUsers",
  systemReferences = "systemReferences",
  systemPhases = "systemPhases",
  systemProcesses = "systemProcesses",
  systemTemplates = "systemTemplates",
}

const AppComponent: React.FunctionComponent<{}> = () => {
  const [sidebar, setSidebar] = React.useState(false);
  const [screen, setScreen] = React.useState(Screens.home);
  const [theme, setTheme] = React.useState(defaultGlobalColors);
  const GlobalStyle = getGlobalStyle(theme);

  const getScreen = React.useCallback(
    (key: string, props: any): React.ReactNode => {
      switch (key) {
        case Screens.home:
          return <Home open={props.open} theme={props.theme} />;
        case Screens.warehouseIn:
          return <InputsManagement {...props} />;
        case Screens.warehouseOut:
          return <OuputsManagement {...props} />;
        case Screens.laboratory:
          return;
        case Screens.productionTinturaria:
          return;
        case Screens.productionAcabamentos:
          return;
        case Screens.productionMaquina:
          return;
        case Screens.productionOperador:
          return;
        case Screens.productionFase:
          return;
        case Screens.systemEntities:
          return;
        case Screens.systemUsers:
          return;
        case Screens.systemReferences:
          return;
        case Screens.systemPhases:
          return;
        case Screens.systemProcesses:
          return;
        case Screens.systemTemplates:
          return;
        case Screens.temas:
          return (
            <ThemeManagement theme={props.theme} setTheme={props.setTheme} />
          );
        case Screens.conta:
          return <AccountManagement theme={props.theme} />;
        default:
          return;
      }
    },
    []
  );

  const background = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "background-color")?.value ||
      "rgba(245, 242, 235, 1)",
    [theme]
  );

  return (
    <AppContainer color={background}>
      <GlobalStyle />
      <Main color={background}>
        <SidebarComponent
          open={sidebar}
          setOpen={setSidebar}
          screen={screen}
          setScreen={setScreen}
          theme={theme}
        />
        <Container
          className={`main-content ${sidebar ? "main-content--expanded" : ""}`}
        >
          <NavigationBarComponent
            open={sidebar}
            setOpen={setSidebar}
            theme={theme}
          />
          {getScreen(screen, {
            open: sidebar,
            setOpen: setSidebar,
            screen,
            setScreen,
            theme,
            setTheme,
          })}
        </Container>
      </Main>
    </AppContainer>
  );
};

export const App = React.memo(AppComponent);
