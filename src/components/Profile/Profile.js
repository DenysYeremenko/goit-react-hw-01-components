import { ProfileAvatar, ProfileName, ProfileText, ProfileStatsText, ProfileStatsValue, ProfileStat } from '../Profile/Profile.styled'
import { Box } from 'components/Box'
import {theme} from '../../theme'
import PropTypes from "prop-types"

export const Profile = ({ user: {avatar, stats: {followers, views, likes}, location, tag, username}}) => {
  return (
  <Box display="flex" flexDirection="column" alignItems="center" boxShadow={theme.shadows[1]} width="240px">
    <Box display="flex" alignItems="center" gridGap={3} flexDirection="column" p={4}>
      <ProfileAvatar src={avatar} alt="User avatar"/>
      <ProfileName>{username}</ProfileName>
      <ProfileText>@{tag}</ProfileText>
      <ProfileText>{location}</ProfileText>
    </Box>
    <ul className="stats">
      <Box display="flex">
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
    </ul>
  </Box>
  )
}

Profile.propTypes = {
  user: PropTypes.exact({
    avatar: PropTypes.string,
    stats: PropTypes.exact({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
    location: PropTypes.string,
    tag: PropTypes.string,
    username: PropTypes.string
  })

}