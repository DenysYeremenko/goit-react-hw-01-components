import { Box } from "components/Box"
import { OnlineStatus } from "./FriendList.styled"
import { theme } from "../../theme"

export const FriendListItem = ({friends}) => {
    return friends.map(({id, isOnline, name, avatar})=> {
        return <li className="item" key={id}>
                <Box display="flex" alignItems="center" boxShadow={theme.shadows[0]} p={4} m={1} height="55px">
                    <OnlineStatus status={isOnline}></OnlineStatus>
                    <img className="avatar" src={avatar} alt="User avatar" width="48" />
                    <p className="name">{name}</p>
                </Box>
            </li>}
    )
}