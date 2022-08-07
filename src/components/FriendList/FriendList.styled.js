import styled from "styled-components";

export const OnlineStatus = styled.span`
    width: 10px;
    height: 10px;
    margin: ${p => p.theme.space[4]}px;
    border-radius: ${p => p.theme.radii.m};
    background-color: ${p=> p.status ? "green" : "red"};
`