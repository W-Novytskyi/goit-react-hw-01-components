import Stat from './Stat';
import PropTypes from 'prop-types';
import { List, StatItem } from './Statistics.styled';

export default function StatList({ items }) {
  return (
    <List>
      {items.map(item => (
        <StatItem key={item.id}>
          <Stat label={item.label} percentage={item.percentage} />
        </StatItem>
      ))}
    </List>
  );
}

StatList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
