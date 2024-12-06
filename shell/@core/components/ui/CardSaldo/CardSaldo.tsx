/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { CardSaldoProps } from "../../../../@core/props/cardSaldo";
import {
  BalanceRow, CardSaldo, ContentBalanceContainer, ContentContainer,
  DateInfoCard, TitleBalance, TitleCard, DividerBalance, SubTitleBalance,
  ValueBalance,
  ButtonIcon
} from "../../../../@theme/custom/CardSaldo";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const CardSaldoComponent: React.FC<CardSaldoProps> = ({ name, balance, showBalance }) => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(showBalance);
  
  const today = new Date();
  const dayNames = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
  const dayOfWeek = dayNames[today.getDay()];
  const formattedDate = today.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const formatCurrency = (value: number | string) => {
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(numericValue);
  };

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <CardSaldo>
      <ContentContainer>            
        <TitleCard>Olá, {name} :)</TitleCard>        
        <DateInfoCard>{dayOfWeek}, {formattedDate}</DateInfoCard>
      </ContentContainer>
      
      <ContentBalanceContainer>
        <BalanceRow>            
          <TitleBalance>Saldo</TitleBalance>
          <ButtonIcon onClick={toggleBalanceVisibility}>
            {isBalanceVisible ? <FaEye /> : <FaEyeSlash />}
          </ButtonIcon>
        </BalanceRow>
        <DividerBalance />
        
        <SubTitleBalance>Conta Corrente</SubTitleBalance>
        <ValueBalance>
          {isBalanceVisible ? formatCurrency(balance) : 'R$ XXXX'}
        </ValueBalance>
      </ContentBalanceContainer>
    </CardSaldo>
  );
};

export default CardSaldoComponent;
