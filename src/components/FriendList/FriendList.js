import { FriendListItem } from './FriendListItem'
import PropTypes from "prop-types"

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(({id, isOnline, name, avatar}) => {
                return <FriendListItem key={id} id={id} isOnline={isOnline} name={name} avatar={avatar}/>
            })}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf( 
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
)}