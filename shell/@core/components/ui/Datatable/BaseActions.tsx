/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@mui/material";
import { FaRegEye } from "react-icons/fa";
import { GrTrash } from "react-icons/gr";
import { HiOutlinePencil } from "react-icons/hi2";
import {
  BtnTableView,
  BtnTableEdit,
  BtnTableDelete,
} from "../../../../@theme/custom/TableTCF";

const BaseActions: React.FC<any> = (props: any) => {
  return (
    <Box
      sx={{
        m: 1,
        position: "relative",
      }}
    >
      {props.params !== null ? (
        <>
          <BtnTableView
            className="me-3"
            onClick={() => {
              props.viewAction("view", true, props.params.row.id);
            }}
          >
            <FaRegEye />
          </BtnTableView>
          <BtnTableEdit
            className="me-3"
            onClick={() => {
              props.editAction("edit", true, props.params.row.id);
            }}
          >
            <HiOutlinePencil />
          </BtnTableEdit>
          <BtnTableDelete
            onClick={() => {
              props.deleteAction(props.params.row.id);
            }}
          >
            <GrTrash />
          </BtnTableDelete>
        </>
      ) : (
        <>loading action</>
      )}
    </Box>
  );
};

export default BaseActions;
