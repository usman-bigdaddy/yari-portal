import React from "react";
import { MDBDataTable } from "mdbreact";

export default function NormalTable(props) {
  return (
    <div className="table-responsive">
      <MDBDataTable
        //hover
        print
        entriesOptions={[50, 100, 200]}
        entries={50}
        pagesAmount={4}
        data={props.data}
        paging={props.paging ?? true}
        pagingTopLeft
        searchTop
        searchBottom={false}
        barReverse
      />
    </div>
  );
}
