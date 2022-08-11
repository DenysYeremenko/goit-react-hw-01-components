import { TransactionHead, TransactionData } from "./TransactionHistory.styled"
import PropTypes from "prop-types"

export const TransactionHistory = ({items}) => {
    return (
        <table className="transaction-history">
            <TransactionHead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </TransactionHead>
            <tbody>
                {items.map(({id, type, amount, currency}) => {
                     return  <tr key={id}>
                        <TransactionData>{type}</TransactionData>
                        <TransactionData>{amount}</TransactionData>
                        <TransactionData>{currency}</TransactionData>
                        </tr>}
                )}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired
        })
    )
}
