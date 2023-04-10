import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

export default function FriendList({ items }) {
  return (
    <ul className="friend-list">
      {items.map(item => (
        <li className="item" key={item.id}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnLine}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
