import PropTypes from 'prop-types';
import {
  Container,
  Card,
  Avatar,
  Name,
  Info,
  Stats,
  StatItem,
  StatLabel,
  StatQuantity,
} from './Profile.styled';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <Container>
      <Card className="description">
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Card>
      <Stats>
        <StatItem>
          <StatLabel>Followers</StatLabel>
          <StatQuantity>{followers}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel>Views</StatLabel>
          <StatQuantity>{views}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel>Likes</StatLabel>
          <StatQuantity>{likes}</StatQuantity>
        </StatItem>
      </Stats>
    </Container>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
