import styled from "styled-components";

export const StatHeader = styled.h2`
    text-align: center;
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
`

export const StatItem = styled.li`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 5px;
    width: 28px;
`