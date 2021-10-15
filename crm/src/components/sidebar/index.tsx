import React from "react";

import StorageOutlinedIcon from "@material-ui/icons/StorageOutlined";
import HomeOutlined from "@material-ui/icons/HomeOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import ColorizeOutlinedIcon from "@material-ui/icons/ColorizeOutlined";
import SquareFootOutlinedIcon from "@material-ui/icons/SquareFootOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";

import { NavigationSidebarComponent } from "..";
import {
  Avatar,
  BottomArea,
  Job,
  Name,
  Shape,
  Sidebar,
  TopArea,
} from "./styles";
import { Screens, ThemeProps } from "../../App";

const getScienceIcon = () => (
  <svg
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    data-test-id="ScienceIcon"
  >
    <path d="M19.8 18.4 14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6z"></path>
  </svg>
);

const getMachineIcon = () => (
  <svg
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    data-test-id="PrecisionManufacturingOutlinedIcon"
  >
    <path d="m19.93 8.35-3.6 1.68L14 7.7V6.3l2.33-2.33 3.6 1.68c.38.18.82.01 1-.36.18-.38.01-.82-.36-1l-3.92-1.83c-.38-.18-.83-.1-1.13.2L13.78 4.4c-.18-.24-.46-.4-.78-.4-.55 0-1 .45-1 1v1H8.82C8.4 4.84 7.3 4 6 4 4.34 4 3 5.34 3 7c0 1.1.6 2.05 1.48 2.58L7.08 18H6c-1.1 0-2 .9-2 2v1h13v-1c0-1.1-.9-2-2-2h-1.62L8.41 8.77c.17-.24.31-.49.41-.77H12v1c0 .55.45 1 1 1 .32 0 .6-.16.78-.4l1.74 1.74c.3.3.75.38 1.13.2l3.92-1.83c.38-.18.54-.62.36-1-.18-.37-.62-.54-1-.36zM6 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5.11 10H9.17l-2.46-8h.1l4.3 8z"></path>
  </svg>
);

const getInIcon = () => (
  <svg
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    data-test-id="LoginOutlinedIcon"
  >
    <path d="M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"></path>
  </svg>
);

const getOutIcon = () => (
  <svg
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    data-test-id="LogoutOutlinedIcon"
  >
    <path d="m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"></path>
  </svg>
);

const getEngineeringIcon = () => (
  <svg
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    data-test-iid="EngineeringIcon"
  >
    <path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm13.1-8.16c.01-.11.02-.22.02-.34 0-.12-.01-.23-.03-.34l.74-.58c.07-.05.08-.15.04-.22l-.7-1.21c-.04-.08-.14-.1-.21-.08l-.86.35c-.18-.14-.38-.25-.59-.34l-.13-.93c-.02-.09-.09-.15-.18-.15h-1.4c-.09 0-.16.06-.17.15l-.13.93c-.21.09-.41.21-.59.34l-.87-.35c-.08-.03-.17 0-.21.08l-.7 1.21c-.04.08-.03.17.04.22l.74.58c-.02.11-.03.23-.03.34 0 .11.01.23.03.34l-.74.58c-.07.05-.08.15-.04.22l.7 1.21c.04.08.14.1.21.08l.87-.35c.18.14.38.25.59.34l.13.93c.01.09.08.15.17.15h1.4c.09 0 .16-.06.17-.15l.13-.93c.21-.09.41-.21.59-.34l.87.35c.08.03.17 0 .21-.08l.7-1.21c.04-.08.03-.17-.04-.22l-.73-.58zm-2.6.91c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm.42 3.93-.5-.87c-.03-.06-.1-.08-.15-.06l-.62.25c-.13-.1-.27-.18-.42-.24l-.09-.66c-.02-.06-.08-.1-.14-.1h-1c-.06 0-.11.04-.12.11l-.09.66c-.15.06-.29.15-.42.24l-.62-.25c-.06-.02-.12 0-.15.06l-.5.87c-.03.06-.02.12.03.16l.53.41c-.01.08-.02.16-.02.24 0 .08.01.17.02.24l-.53.41c-.05.04-.06.11-.03.16l.5.87c.03.06.1.08.15.06l.62-.25c.13.1.27.18.42.24l.09.66c.01.07.06.11.12.11h1c.06 0 .12-.04.12-.11l.09-.66c.15-.06.29-.15.42-.24l.62.25c.06.02.12 0 .15-.06l.5-.87c.03-.06.02-.12-.03-.16l-.52-.41c.01-.08.02-.16.02-.24 0-.08-.01-.17-.02-.24l.53-.41c.05-.04.06-.11.04-.17zm-2.42 1.65c-.46 0-.83-.38-.83-.83 0-.46.38-.83.83-.83s.83.38.83.83c0 .46-.37.83-.83.83zM4.74 9h8.53c.27 0 .49-.22.49-.49v-.02c0-.27-.22-.49-.49-.49H13c0-1.48-.81-2.75-2-3.45v.95c0 .28-.22.5-.5.5s-.5-.22-.5-.5V4.14C9.68 4.06 9.35 4 9 4s-.68.06-1 .14V5.5c0 .28-.22.5-.5.5S7 5.78 7 5.5v-.95C5.81 5.25 5 6.52 5 8h-.26c-.27 0-.49.22-.49.49v.03c0 .26.22.48.49.48zM9 13c1.86 0 3.41-1.28 3.86-3H5.14c.45 1.72 2 3 3.86 3z"></path>
  </svg>
);

const getProductionIcon = () => (
  <svg
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    data-test-id="InsightsOutlinedIcon"
  >
    <path d="M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93 0-1.1-.9-2-2-2z"></path>
    <path d="m15 9 .94-2.07L18 6l-2.06-.93L15 3l-.92 2.07L12 6l2.08.93zM3.5 11 4 9l2-.5L4 8l-.5-2L3 8l-2 .5L3 9z"></path>
  </svg>
);

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  screen: Screens;
  setScreen: (value: Screens) => void;
  theme: ThemeProps[];
}

export const SidebarComponent: React.FunctionComponent<Props> = ({
  open,
  screen,
  setScreen,
  theme,
}) => {
  const entries = React.useMemo(
    () => [
      {
        title: "Página inicial",
        itemId: Screens.home,
        icon: (): React.ReactNode => <HomeOutlined />,
      },
      {
        title: "Armazém",
        itemId: Screens.empty,
        // you can use your own custom Icon component as well
        // icon is optional
        icon: (): React.ReactNode => <StorageOutlinedIcon />,
        entries: [
          {
            title: "Gestão Entradas",
            itemId: Screens.warehouseIn,
            icon: (): React.ReactNode => getInIcon(),
          },
          {
            title: "Gestão Saídas",
            itemId: Screens.warehouseOut,
            icon: (): React.ReactNode => getOutIcon(),
          },
        ],
      },
      {
        title: "Laboratório",
        itemId: Screens.laboratory,
        icon: (): React.ReactNode => getScienceIcon(),
      },
      {
        title: "Produção",
        itemId: Screens.empty,
        icon: (): React.ReactNode => getProductionIcon(),
        entries: [
          {
            title: "Planeamento",
            itemId: Screens.empty,
            entries: [
              {
                title: "Tinturaria",
                itemId: Screens.productionTinturaria,
                icon: (): React.ReactNode => <ColorizeOutlinedIcon />,
              },
              {
                title: "Acabamentos",
                itemId: Screens.productionAcabamentos,
                icon: (): React.ReactNode => <SquareFootOutlinedIcon />,
              },
            ],
          },
          {
            title: "Listagens",
            itemId: Screens.empty,
            entries: [
              {
                title: "Máquina",
                itemId: Screens.productionMaquina,
                icon: (): React.ReactNode => getMachineIcon(),
              },
              {
                title: "Operador",
                itemId: Screens.productionOperador,
                icon: (): React.ReactNode => getEngineeringIcon(),
              },
              {
                title: "Fase",
                itemId: Screens.productionFase,
                icon: (): React.ReactNode => <ListAltOutlinedIcon />,
              },
            ],
          },
        ],
      },
      {
        title: "Sistema",
        itemId: Screens.empty,
        icon: (): React.ReactNode => <SettingsOutlinedIcon />,
        entries: [
          {
            title: "Temas",
            itemId: Screens.temas,
            icon: (): React.ReactNode => <ColorLensOutlinedIcon />,
          },
          {
            title: "Conta",
            itemId: Screens.conta,
            icon: (): React.ReactNode => <PersonOutlineOutlinedIcon />,
          },
        ],
      },
    ],
    []
  );
  const background = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "color-primary")?.value ||
      "rgba(69, 132, 227, 1)",
    [theme]
  );
  const color = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "text-secondary-color")?.value ||
      "rgba(255, 255, 255 , 1)",
    [theme]
  );
  const shapeColor = React.useMemo(
    () =>
      theme.find((entry) => entry.key === "surface-color-400")?.value ||
      "rgba(255, 255, 255 , 0.4)",
    [theme]
  );
  const renderShapes = React.useCallback(
    (): React.ReactNode => <Shape color={shapeColor} />,
    [shapeColor]
  );

  return (
    <Sidebar
      className={`sidebar ${open && "sidebar--expanded"}`}
      style={{ background }}
    >
      {renderShapes()}
      <TopArea>
        <Avatar />
        <Name color={color}>Rei do React</Name>
        <Job color={color}>Software developer</Job>
      </TopArea>
      <BottomArea>
        <NavigationSidebarComponent
          entries={entries}
          clickEntry={setScreen}
          screen={screen}
          theme={theme}
        />
      </BottomArea>
    </Sidebar>
  );
};
