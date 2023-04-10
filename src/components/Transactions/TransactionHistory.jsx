import Transaction from './Transaction';
import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
} from './Transaction.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(item => (
          <tr key={item.id}>
            <Transaction
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </TableBody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
