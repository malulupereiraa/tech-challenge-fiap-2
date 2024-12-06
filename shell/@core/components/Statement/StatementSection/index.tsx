/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "./Container";
import StatementItem from "../StatementItem";

const StatementSection = ({
  month,
  items
}: any) => {
  return (
    <Container>
      <h6>{month}</h6>
      {
        items.map((transaction: { id: any; amount: any; date: any; transactionType: any; }) => (
          <StatementItem
            key={transaction.id}
            amount={transaction.amount}
            date={transaction.date}
            transactionType={transaction.transactionType}
          />
        ))
      }
    </Container>
  );
};

StatementSection.displayName = "StatementSection";

export default StatementSection;
