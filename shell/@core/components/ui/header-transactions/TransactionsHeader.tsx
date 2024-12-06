"use client";
import Image from "next/image";
import AvatarIcon from "../../icons/Avatar.svg";
import useWindowSize from "../../hooks/WindowsSize";
import MenuButton from "../menu/MenuButton";
import { usePathname } from "next/navigation";
import StyledHeader from "../../../../@theme/custom/StyledTransactionsHeader";

interface TituloProps {
  name: string;
}

export default function TransactionsHeader(props: TituloProps) {
  const pathname = usePathname();
  const { width } = useWindowSize();

  const IconHeader = () => {
    if (width <= 360) return <MenuButton pathname={pathname} />;
  };

  const NameHeader = () => {
    if(width > 360)
        return <p id='clientName'>{props.name}</p>;
  };

  return (
    <StyledHeader
      className="row no-gutters">
      <div className="menuNameAvatarContainer">
          <IconHeader />
          <div className="nameAvatarContainer">
            <NameHeader />
            <Image alt="avatar" src={AvatarIcon} className="avatarIcon" />
          </div>
      </div>
    </StyledHeader>
  );
}
