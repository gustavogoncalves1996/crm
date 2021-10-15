import React from "react";

import { MUIDataTableOptions } from "mui-datatables";

import { Screens } from "../../App";
import { TableComponent } from "../../components";
import { Body } from "./styles";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  screen: string;
  setScreen: (value: Screens) => void;
}

const OuputsManagementComp: React.FunctionComponent<Props> = ({
  open,
  setOpen,
  screen,
  setScreen,
}) => {
  const data = [
    {
      id: "1",
      name: "Joe James",
      company: "Test Corp",
      city: "Yonkers",
      state: "NY",
    },
    {
      id: "2",
      name: "John Walsh",
      company: "Test Corp",
      city: "Hartford",
      state: "CT",
    },
    {
      id: "3",
      name: "Bob Herm",
      company: "Test Corp",
      city: "Tampa",
      state: "FL",
    },
    {
      id: "4",
      name: "James Houston",
      company: "Test Corp",
      city: "Dallas",
      state: "TX",
    },
  ];

  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "company",
      label: "Company",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "city",
      label: "City",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "state",
      label: "State",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Edit",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (
          dataIndex: number,
          rowIndex: number
        ): React.ReactNode => {
          const obj = data[dataIndex];
          return (
            <button
              onClick={() =>
                window.alert(
                  `Clicked "Edit" for row ${rowIndex} with dataIndex of ${dataIndex} -> ${JSON.stringify(
                    obj
                  )}`
                )
              }
            >
              Edit
            </button>
          );
        },
      },
    },
  ];

  const options: MUIDataTableOptions = {
    filter: true,
    filterType: "dropdown",
    responsive: "simple",
    download: true,
    downloadOptions: {
      filename: "Entradas.csv",
      separator: ",",
      filterOptions: {
        useDisplayedColumnsOnly: true,
        useDisplayedRowsOnly: true,
      },
    },
    draggableColumns: {
      enabled: true,
      transitionTime: 300,
    },
    selectableRows: "none",
  };

  return (
    <Body>
      Gestão saídas
      <TableComponent
        title=""
        data={data}
        columns={columns}
        options={options}
      />
    </Body>
  );
};

const areEqual = (prevProps: Props, nextProps: Props): boolean =>
  prevProps.open === nextProps.open &&
  prevProps.setOpen === nextProps.setOpen &&
  prevProps.setScreen === nextProps.setScreen &&
  prevProps.screen === nextProps.screen;

export const OuputsManagement = React.memo(OuputsManagementComp, areEqual);
