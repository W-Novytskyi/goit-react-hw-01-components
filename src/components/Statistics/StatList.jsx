import Stat from './Stat';
import PropTypes from 'prop-types';

export default function StatList({ items }) {
  return (
    <ul className="stat-list">
      {items.map(item => (
        <li className="item" key={item.id}>
          <Stat label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
}

StatList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
