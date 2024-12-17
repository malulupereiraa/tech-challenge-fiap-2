"use client";
import Image from "next/image";
import AvatarIcon from "../../icons/Avatar.svg";
import useWindowSize from "../../hooks/WindowsSize";
import MenuButton from "../Menu/MenuButton";
import { usePathname } from "next/navigation";
import StyledHeader from "../../../../@theme/custom/StyledTransactionsHeader";

import Link, { LinkProps } from "next/link";
import { styled } from "styled-components";


// Redux
import { useSelector, useDispatch } from "react-redux";
import rootReducer from "../../../../redux/root-reducer";
import UserActionTypes from "../../../../redux/user/action.types";
import { logoutUser } from "../../../../redux/user/actions";

interface TituloProps {
  name: string;
}

///Link
const StyledLink = styled(Link)`
  &.isActive {
    font-weight: 700;
    color: ${(props) => props.theme.themeColor.secondary};
    border-bottom: 1px solid ${(props) => props.theme.themeColor.secondary};
  }
`;

type StLinkProps = LinkProps & {
  children: React.ReactNode;
  pathname: string;
  className?: string;
};

const StateLinkProps = ({ pathname, href, children, ...rest }: StLinkProps) => {
  const isActive = pathname === href.toString();

  return (
    <StyledLink
      href={href}
      className={`${isActive ? "isActive" : ""} ${"itensMenuBorder"}`}
      {...rest}
    >
      {children}
    </StyledLink>
  );
};


// Termina Link

export default function TransactionsHeader(props: TituloProps) {



// Redux
const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
const dispatch = useDispatch();

const handleLogoutClick = () => {
  dispatch(logoutUser());
 
};

 console.log("A pessoa logada é: " + currentUser);
// Termina Link




  const pathname = usePathname();
  const { width } = useWindowSize();

  const IconHeader = () => {
    if (width <= 360) return <MenuButton pathname={pathname} />;
  };

  const NameHeader = () => {
    if (width > 360) return <p id="clientName">{props.name}</p>;
  };

  return (
    <StyledHeader className="row no-gutters">
      <div className="menuNameAvatarContainer">
        <IconHeader />
        <div className="nameAvatarContainer">
          <NameHeader />
          <Image alt="avatar" src={AvatarIcon} className="avatarIcon" />
        </div>
        <div className="sairContainer">
           
          {/* <button>Sair</button> */}
           if (currentUser) {
            <StateLinkProps pathname={pathname} href="/" onClick={handleLogoutClick}>
              Sair
            </StateLinkProps>
           }

        </div>
      </div>
    </StyledHeader>
  );
}
