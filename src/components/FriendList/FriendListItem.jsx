import PropTypes from 'prop-types';
import { Avatar, Name, Status } from './FriendList.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <Status isOnline={isOnline} />
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
