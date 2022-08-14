import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.historyThead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.historyTbody}>
        {items.map(({ type, amount, currency, id }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};