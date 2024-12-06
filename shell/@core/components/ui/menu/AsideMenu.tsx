import StyledMenu from "../../../../@theme/custom/StyledMenu";
import CloseIcon from "@mui/icons-material/Close";
import Link, { LinkProps } from "next/link";
import React, { useState } from "react";
import { styled } from "styled-components";
import useWindowSize from "../../hooks/WindowsSize";

export default function AsideMenu({ pathname }: { pathname: string }) {
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

  const StateLinkProps = ({
    pathname,
    href,
    children,
    ...rest
  }: StLinkProps) => {
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

  const { width } = useWindowSize();

  const VisibleCloseButton = () => {
    return (
      <>
        {width <= 390 && (
          <button
            className="iconMenuButton iconCloseButton"
            onClick={toggleMenu}
          >
            <CloseIcon />
            {isOpen && <AsideMenu pathname={pathname} />}
          </button>
        )}
      </>
    );
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledMenu className="row no-gutters">
      <div className="no-gutters menuContainer">
        <nav className="itensMenu mt-4">
          <VisibleCloseButton />
          <StateLinkProps pathname={pathname} href="/home">Início</StateLinkProps>
          <StateLinkProps pathname={pathname} href="/transferencias">
            Transferências
          </StateLinkProps>
          <StateLinkProps pathname={pathname} href="/transacoes">
            Transações
          </StateLinkProps>
          <StateLinkProps pathname={pathname} href="/investimentos">
            Investimentos
          </StateLinkProps>
          <StateLinkProps pathname={pathname} href="/outros">
            Outros serviços
          </StateLinkProps>
        </nav>
      </div>
    </StyledMenu>
  );
}
