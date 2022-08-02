import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    p, ul {
        margin: 0;
        list-style: none;
        padding: 0;
    }
`

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    width: 240px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    
`;

const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 7px;
`;

const AvatarImg = styled.img`

    width: 100px;
    border-radius: 50px;
    background-color: grey;
`;

const UsernameP = styled.p `
    font-weight: 700;
    margin-top: 20px;
`

const StatsList = styled.ul`
    display: flex;
    
`;

const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 58px;
    box-shadow: 0p x1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    padding: 10px;
    border: 1px solid #eee;
`

export {ProfileWrapper, DescriptionWrapper, AvatarImg, StatsList, StatsItem, UsernameP,  GlobalStyle}