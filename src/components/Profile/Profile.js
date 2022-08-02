import { ProfileWrapper, DescriptionWrapper, StatsList, StatsItem, AvatarImg, UsernameP,  GlobalStyle } from './Profile.styled'

export const Profile = ({ user: {avatar, stats: {followers, views, likes}, location, tag, username}}) => {
    return (
      <ProfileWrapper>
        <GlobalStyle />
        <DescriptionWrapper>
          <AvatarImg 
          src={avatar}
          alt="User avatar"
          ></AvatarImg>
          <UsernameP>{username}</UsernameP>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </DescriptionWrapper>
        <StatsList>
          <StatsItem>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </StatsItem>
          <StatsItem>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </StatsItem>
          <StatsItem>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </StatsItem>
        </StatsList>
      </ProfileWrapper>
    )
}