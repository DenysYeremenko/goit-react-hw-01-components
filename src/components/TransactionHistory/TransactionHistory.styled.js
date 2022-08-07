import styled from "styled-components";

export const TransactionData = styled.td`
    box-shadow: ${p => p.theme.shadows[1]};
    width: 120px;
    text-align: center;
    padding: ${p => p.theme.space[2]}px;
`

export const TransactionHead = styled.thead`
    background-color: #07e1e1;
`