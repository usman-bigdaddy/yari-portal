//import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import MUIDataTable from "mui-datatables";
import React from "react";

function ReportTable(props) {
  const options = {
    rowsPerPageOptions: [5, 10, 20, 50, 100, 200, 500, 1000],
    search: true,
    download: true,
    print: true,
    viewColumns: true,
    fixedHeader: true,
    filter: true,
    selectableRows: "none",
    filterType: "dropdown",
    responsive: "standard",
    pagination:
      typeof props.pagination !== "undefined" ? props.pagination : true,
    tableBodyHeight:
      typeof props.height !== "undefined" ? props.height : "400px",
    downloadOptions: {
      filename: `${props.title}.csv`,
      separator: ",",
    },
  };

  return (
    <>
      <div style={{ width: `100%` }}>
        <MUIDataTable
          title={props.title}
          data={props.data}
          columns={props.columns}
          options={options}
        />
      </div>
    </>
  );
}

export default ReportTable;
