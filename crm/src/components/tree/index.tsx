import React from "react";
import { Navigation } from "react-minimal-side-navigation";

import PersonOutlinedIcon from "@material-ui/icons/PersonOutline";
import AllInboxOutlinedIcon from "@material-ui/icons/AllInboxOutlined";

import { Tree } from "./styles";

interface Entry {
  text: string;
  entries: Entry[];
}

interface Props {
  entries: Entry[];
}

export const TreeComponent: React.FunctionComponent<Props> = (props: Props) => {
  // TODO: em ecrãs mais pequenos a sidebar vai ser só os icons e o burguer menu tem de desaparecer da navbar
  return (
    <Tree>
      <Navigation
        // you can use your own router's api to get pathname
        activeItemId="/management/members"
        onSelect={({ itemId }) => {
          // maybe push to the route
        }}
        items={[
          {
            title: "Warehouse",
            itemId: "/dashboard",
            // you can use your own custom Icon component as well
            // icon is optional
            elemBefore: () => <AllInboxOutlinedIcon />,
          },
          {
            title: "Laboratory",
            itemId: "/laboratory",
            elemBefore: () => <PersonOutlinedIcon />,
            subNav: [
              {
                title: "Projects",
                itemId: "/laboratory/projects",
              },
              {
                title: "Members",
                itemId: "/laboratory/members",
              },
            ],
          },
          {
            title: "Production",
            itemId: "/production",
            elemBefore: () => <PersonOutlinedIcon />,
            subNav: [
              {
                title: "Teams",
                itemId: "/production/teams",
              },
            ],
          },
          {
            title: "Chemicals",
            itemId: "/chemicals",
            elemBefore: () => <PersonOutlinedIcon />,
            subNav: [
              {
                title: "Teams",
                itemId: "/chemicals/teams",
              },
            ],
          },
          {
            title: "System",
            itemId: "/system",
            elemBefore: () => <PersonOutlinedIcon />,
          },
        ]}
      />
    </Tree>
  );
};
