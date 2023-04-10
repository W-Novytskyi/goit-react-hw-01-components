import PropTypes from 'prop-types';

export default function Stat({ label, percentage }) {
  return (
    <div>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </div>
  );
}

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
