import { TransactionData } from "./TransactionHistory.styled"

export const TransactionItem = ({items}) => {
    return items.map(({id, type, amount, currency}) => {
        return  <tr key={id}>
                    <TransactionData>{type}</TransactionData>
                    <TransactionData>{amount}</TransactionData>
                    <TransactionData>{currency}</TransactionData>
                </tr>}
        )
}