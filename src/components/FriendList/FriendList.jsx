import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import { List, Card } from './FriendList.styled';

export default function FriendList({ items }) {
  return (
    <List>
      {items.map(item => (
        <Card key={item.id}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </Card>
      ))}
    </List>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
