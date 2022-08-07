import { TransactionItem } from "./TransactionItem"
import { TransactionHead } from "./TransactionHistory.styled"

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
                <TransactionItem items={items}/>
            </tbody>
        </table>
    )
}