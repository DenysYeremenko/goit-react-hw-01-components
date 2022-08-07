import styled from "styled-components"

export const ProfileAvatar = styled.img`
    width: 100px;
    border-radius: ${p => p.theme.radii.m};
    background-color: grey;
`

export const ProfileName = styled.p`
    font-weight: ${p => p.theme.fontWeights.bold};
    margin-top: 20px;
`

export const ProfileText= styled.p`
    color: grey;
`

export const ProfileStatsText= styled.p`
    color: grey;
`

export const ProfileStatsValue= styled.p`
    font-weight: ${p => p.theme.fontWeights.bold};
`

export const ProfileStat = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 58px;
    padding: ${p => p.theme.space[4]}px;
    border: 1px solid #eee;
`