import { DataGrid } from "@mui/x-data-grid";
import { ptBR } from "@mui/x-data-grid/locales";
import Paper from "@mui/material/Paper";
import { DatatableProps } from "../../../props/datatable";
import CustomGridToolbar from "./CustomGridToolbar";

const DatatableTCF: React.FC<DatatableProps> = ({
  columns,
  rows,
  paginationModel,
  checkbox,
  loading,
}) => {
  return (
    <>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection={checkbox !== undefined ? checkbox : false}
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
          sx={{
            border: 0,
            background: "#BDDCE3",
            "& .MuiDataGrid-row--borderBottom": {
              background: "#004D61!important",
              color: "#FFFFFF",
              fontWeight: "bold",
            },
          }}
          slots={{ toolbar: CustomGridToolbar }}
          loading={loading}
        />
      </Paper>
    </>
  );
};

export default DatatableTCF;
