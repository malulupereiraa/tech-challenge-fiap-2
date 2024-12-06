/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@mui/material";
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

const CustomGridToolbar: React.FC<any> = (props: any) => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton
        slotProps={{
          tooltip: { title: "Escolha as Colunas que deseja Visualizar" },
          button: { color: "inherit" },
        }}
      />
      <GridToolbarFilterButton
        slotProps={{
          tooltip: { title: "Filtre os Resultados por..." },
          button: { color: "inherit" },
        }}
      />
      <GridToolbarDensitySelector
        slotProps={{
          tooltip: { title: "Densidade (Espaçamento) da Tabela" },
          button: { color: "inherit" },
        }}
      />
      <Box sx={{ flexGrow: 1 }} />
      <GridToolbarExport
        slotProps={{
          tooltip: { title: "Exportar Dados das Transações" },
          button: { variant: "outlined", color: "inherit" },
        }}
      />
    </GridToolbarContainer>
  );
};

export default CustomGridToolbar;
