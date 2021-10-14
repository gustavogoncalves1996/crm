import React from "react";

import { AppContainer, getGlobalStyle, Main, Container } from "./App.styles";
import { SidebarComponent, NavigationBarComponent } from "./components";
import { Home, InputsManagement, OuputsManagement } from "./screens";

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

const defaultGlobalColors = [
  {
    key: "color-primary",
    value: "rgba(69, 132, 227, 1)",
  },
  {
    key: "color-primary-100",
    value: "rgba(69, 132, 227, 0.1)",
  },
  {
    key: "color-primary-200",
    value: "rgba(69, 132, 227, 0.2)",
  },
  {
    key: "color-primary-300",
    value: "rgba(69, 132, 227, 0.3)",
  },
  {
    key: "color-primary-400",
    value: "rgba(69, 132, 227, 0.4)",
  },
  {
    key: "color-primary-500",
    value: "rgba(69, 132, 227, 0.5)",
  },
  {
    key: "color-primary-600",
    value: "rgba(69, 132, 227, 0.6)",
  },
  {
    key: "color-primary-700",
    value: "rgba(69, 132, 227, 0.7)",
  },
  {
    key: "color-primary-800",
    value: "rgba(69, 132, 227, 0.8)",
  },
  {
    key: "color-primary-900",
    value: "rgba(69, 132, 227, 0.9)",
  },
  {
    key: "color-secondary",
    value: "rgba(71, 137, 120, 1)",
  },
  {
    key: "color-secondary-100",
    value: "rgba(71, 137, 120, 0.1)",
  },
  {
    key: "color-secondary-200",
    value: "rgba(71, 137, 120, 0.2)",
  },
  {
    key: "color-secondary-300",
    value: "rgba(71, 137, 120, 0.3)",
  },
  {
    key: "color-secondary-400",
    value: "rgba(71, 137, 120, 0.4)",
  },
  {
    key: "color-secondary-500",
    value: "rgba(71, 137, 120, 0.5)",
  },
  {
    key: "color-secondary-600",
    value: "rgba(71, 137, 120, 0.6)",
  },
  {
    key: "color-secondary-700",
    value: "rgba(71, 137, 120, 0.7)",
  },
  {
    key: "color-secondary-800",
    value: "rgba(71, 137, 120, 0.8)",
  },
  {
    key: "color-secondary-900",
    value: "rgba(71, 137, 120, 0.9)",
  },
  {
    key: "color-error",
    value: "rgba(214, 92, 108, 1)",
  },
  {
    key: "color-error-100",
    value: "rgba(214, 92, 108, 0.1)",
  },
  {
    key: "color-error-300",
    value: "rgba(214, 92, 108, 0.3)",
  },
  {
    key: "color-error-500",
    value: "rgba(214, 92, 108, 0.5)",
  },
  {
    key: "background-color",
    value: "rgba(245, 242, 235, 1)",
  },
  {
    key: "surface-color",
    value: "rgba(255, 255, 255, 1)",
  },
  {
    key: "surface-color-50",
    value: "rgba(255, 255, 255, 0.05)",
  },
  {
    key: "surface-color",
    value: "rgba(255, 255, 255, 1)",
  },
  {
    key: "surface-color-100",
    value: "rgba(255, 255, 255, 0.1)",
  },
  {
    key: "surface-color-300",
    value: "rgba(255, 255, 255, 0.3)",
  },
  {
    key: "surface-color-400",
    value: "rgba(255, 255, 255, 0.4)",
  },
  {
    key: "surface-color-500",
    value: "rgba(255, 255, 255, 0.5)",
  },
  {
    key: "surface-color-700",
    value: "rgba(255, 255, 255, 0.7)",
  },
  {
    key: "surface-color-800",
    value: "rgba(255, 255, 255, 0.8)",
  },
  {
    key: "surface-color-900",
    value: "rgba(255, 255, 255, 0.9)",
  },
  {
    key: "dark-surface-color",
    value: "rgba(0, 0, 0, 1)",
  },
  {
    key: "dark-surface-color-250",
    value: "rgba(0, 0, 0, 0.25)",
  },
  {
    key: "dark-surface-color-500",
    value: "rgba(0, 0, 0, 0.5)",
  },
  {
    key: "dark-surface-color-800",
    value: "rgba(0, 0, 0, 0.8)",
  },
  {
    key: "dark-surface-color-900",
    value: "rgba(0, 0, 0, 0.9)",
  },
  {
    key: "text-primary-title-color",
    value: "rgb(51, 51, 51)",
  },
  {
    key: "text-primary-text-color",
    value: "rgb(102, 102, 102)",
  },
  {
    key: "text-secondary-color",
    value: "rgba(255, 255, 255, 1)",
  },
  {
    key: "box-shadow-primary-color",
    value: "rgba(0, 0, 0, 0.15)",
  },
  {
    key: "dark-box-shadow-primary-color",
    value: "rgba(255, 255, 255, 0.15)",
  },
];

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
}

const getScreen = (key: string, props: any): React.ReactNode => {
  switch (key) {
    case Screens.home:
      return <Home {...props} />;
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
    default:
      return;
  }
};

const App: React.FunctionComponent<{}> = () => {
  const [sidebar, setSidebar] = React.useState(false);
  const [screen, setScreen] = React.useState(Screens.home);
  const [globalColors, setTheme] = React.useState(defaultGlobalColors);
  const GlobalStyle = getGlobalStyle(globalColors);

  return (
    <AppContainer>
      <GlobalStyle />
      <Main>
        <SidebarComponent
          open={sidebar}
          setOpen={setSidebar}
          screen={screen}
          setScreen={setScreen}
        />
        <Container
          className={`main-content ${sidebar ? "main-content--expanded" : ""}`}
        >
          <NavigationBarComponent open={sidebar} setOpen={setSidebar} />
          {getScreen(screen, {
            open: sidebar,
            setOpen: setSidebar,
            screen,
            setScreen,
          })}
        </Container>
      </Main>
    </AppContainer>
  );
};

export default App;
