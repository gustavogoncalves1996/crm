import React from "react";

import MUIDataTable, {
  MUIDataTableOptions,
  MUIDataTableColumnDef,
} from "mui-datatables";

interface Props {
  title: string;
  options?: MUIDataTableOptions;
  columns: MUIDataTableColumnDef[];
  data: Array<object | number[] | string[]>;
}

export const TableComponent: React.FunctionComponent<Props> = ({
  title,
  options,
  columns,
  data,
}) => {
  return (
    <MUIDataTable
      title={title}
      data={data}
      columns={columns}
      options={options}
    />
  );
};
