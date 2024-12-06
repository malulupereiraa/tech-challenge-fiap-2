/* eslint-disable @typescript-eslint/no-explicit-any */

import StatementItemProps from "../../props/statement/statement-item";

export default interface StatementItemPropsProps {
  transactions: StatementItemProps[] | undefined,
  loading: boolean
};
