import PropTypes from 'prop-types';
import { StatLabel, StatPercentage } from './Statistics.styled';

export default function Stat({ label, percentage }) {
  return (
    <>
      <StatLabel>{label}</StatLabel>
      <StatPercentage>{percentage}%</StatPercentage>
    </>
  );
}

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
