/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridColDef } from "@mui/x-data-grid";

export interface DatatableProps {
  columns: GridColDef[];
  rows: any[];
  paginationModel: any;
  checkbox?: any;
  loading: boolean;
}
