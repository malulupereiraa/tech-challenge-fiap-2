"use client";

import StyledMenu from "../../../../@theme/custom/StyledMenu";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";
import AsideMenu from "./AsideMenu";

export default function MenuButton({ pathname }: { pathname: string }) {
  const [isClosed, setisClosed] = useState(true);

  const toggleMenu = () => {
    setisClosed(!isClosed);
  };

  return (
    <StyledMenu>
      <button 
        className="iconMenuButton openButton" 
        onClick={toggleMenu}
      >
        {isClosed ? <MenuOutlinedIcon /> : <AsideMenu pathname={pathname} />}
      </button>
    </StyledMenu>
  );
}
