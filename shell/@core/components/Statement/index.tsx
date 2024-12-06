import Container from "./Container";
import StatementItemProps from "../../props/statement/statement-item";
import StatementSection from "./StatementSection";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { FaArrowDownWideShort } from "react-icons/fa6";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import Placeholder from "react-bootstrap/Placeholder";
import Button from "../ui/Button";

export default ({ transactions, loading }: any) => {
  const [sortDirection, setSortDirection] = useState(-1);
  const [filter, setFilter] = useState<"positive" | "negative" | "all">("all");

  const sortByDate = (
    transactionA: StatementItemProps,
    transactionB: StatementItemProps
  ) => {
    if (transactionA.date < transactionB.date) return sortDirection * -1;

    if (transactionA.date > transactionB.date) return sortDirection * 1;

    return 0;
  };

  const toggleFilter = () => {
    switch (filter) {
      case "all":
        setFilter("positive");
        break;
      case "positive":
        setFilter("negative");
        break;
      default:
        setFilter("all");
        break;
    }
  };

  const filteredTransactions = () => {
    if (transactions === undefined)
      return [];

    if (filter == "positive")
      return transactions.filter((transaction) => transaction.transactionType == "deposito");

    if (filter == "negative")
      return transactions.filter((transaction) => transaction.transactionType != "deposito");

    return transactions;
  };

  const transactionsByMonth = () => {
    const transactionsWithParsedDate = filteredTransactions()
      .sort(sortByDate)
      .map((transaction: StatementItemProps) => {
        return Object.assign(transaction, {
          date: new Date(transaction.date)
        });
      })
      .slice(0, 9);

    return Object.groupBy(
      transactionsWithParsedDate,
      (transaction: StatementItemProps) => {
        return (transaction.date as Date).toLocaleDateString("pt-BR", {
          month: "long",
        });
      }
    );
  };

  const filterIcon = () => {
    if (filter == "all") return <FaArrowRightArrowLeft />;

    if (filter == "positive") return <FaArrowRightLong />;

    return <FaArrowLeftLong />;
  };

  const placeholder = (): JSX.Element => {
    return (
      <div className="section-placeholder">
        {[1, 2].map((index: number) => (
          <div key={index} className="section-item-placeholder">
            <h6>
              <Placeholder animation="wave">
                <Placeholder xs={4} />
              </Placeholder>
            </h6>
            <div>
              <Placeholder animation="wave">
                <Placeholder xs={12} />
              </Placeholder>
            </div>
            <div>
              <Placeholder animation="wave">
                <Placeholder xs={8} />
              </Placeholder>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Container>
      <header>
        <h3>Extrato</h3>
        <div className="actions">
          <Button
            size="sm"
            icon={filterIcon()}
            rounded={true}
            onClick={toggleFilter}
            disabled={loading}
          />
          <Button
            size="sm"
            icon={
              sortDirection < 0 ? (
                <FaArrowDownWideShort />
              ) : (
                <FaArrowDownShortWide />
              )
            }
            rounded={true}
            onClick={() => setSortDirection((d) => d * -1)}
            disabled={loading}
          />
        </div>
      </header>

      {loading
        ? placeholder()
        : Object.entries(transactionsByMonth()).map((monthTransactions) => (
            <StatementSection
              key={monthTransactions[0]}
              month={monthTransactions[0]}
              items={monthTransactions[1] as StatementItemProps[]}
            />
          ))}
    </Container>
  );
};
