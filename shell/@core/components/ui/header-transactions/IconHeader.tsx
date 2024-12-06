"use client";
import useWindowSize from "../../hooks/WindowsSize";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const IconHeader: React.FC = () => {
  const { width } = useWindowSize();
  return (
      <span>
        {width <= 360 && <MenuOutlinedIcon />}
      </span>
  );
};

export default IconHeader;
