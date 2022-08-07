import { FriendListItem } from './FriendListItem'
import PropTypes from "prop-types"

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            <FriendListItem friends={friends}/>
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array,
}
