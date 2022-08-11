import { ProfileAvatar, ProfileName, ProfileText, ProfileStatsText, ProfileStatsValue, ProfileStat } from '../Profile/Profile.styled'
import { Box } from 'components/Box'
import {theme} from '../../theme'
import PropTypes from "prop-types"

export const Profile = ({username, avatar, tag, location, stats:{followers, views, likes}}) => {
  return (
  <Box display="flex" flexDirection="column" alignItems="center" boxShadow={theme.shadows[1]} width="240px">
    <Box display="flex" alignItems="center" gridGap={3} flexDirection="column" p={4}>
      <ProfileAvatar src={avatar} alt="User avatar"/>
      <ProfileName>{username}</ProfileName>
      <ProfileText>@{tag}</ProfileText>
      <ProfileText>{location}</ProfileText>
    </Box>
    <Box as="ul" display="flex" className="stats">
      <ProfileStat>
        <ProfileStatsText>Followers</ProfileStatsText>
        <ProfileStatsValue>{followers}</ProfileStatsValue>
      </ProfileStat>
      <ProfileStat>
        <ProfileStatsText>Views</ProfileStatsText>
        <ProfileStatsValue>{views}</ProfileStatsValue>
      </ProfileStat>
      <ProfileStat>
        <ProfileStatsText>Likes</ProfileStatsText>
        <ProfileStatsValue>{likes}</ProfileStatsValue>
      </ProfileStat>
    </Box>
  </Box>
  )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired
}