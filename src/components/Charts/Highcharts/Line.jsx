import PropTypes from 'prop-types';

const Line = ({
  name,
  data,
  color,
  colorLabel,
  suffix,
  type
}) => {
  return {
    name,
    data,
    color,
    colorLabel,
    suffix,
    type
  };
};

Line.propTypes = {
  /**
   * Name of the series
   */
  name: PropTypes.string.isRequired,
  /**
   * Which data should be shown?
   */
  data: PropTypes.array.isRequired,
  /**
   * Should it appear by default?
   */
  visible: PropTypes.bool,
  /**
   * Which axis should it represent?
   */
  yAxis: PropTypes.number,
  /**
   * What color the series must have? ex.: #000000
   */
  color: PropTypes.string,
  /**
   * What color the series label must have? ex.: #000000
   */
  colorLabel: PropTypes.string,
  /**
   * What units this series have? (leading space required)
   */
  suffix: PropTypes.string,
  /**
   * Line dash style
   */
  dash: PropTypes.oneOf([
    'Solid',
    'ShortDash',
    'ShortDot',
    'ShortDashDot',
    'ShortDashDotDot',
    'Dot',
    'Dash',
    'LongDash',
    'DashDot',
    'LongDashDot',
    'LongDashDotDot']),
  /**
   * Line marker style
   */
  marker: PropTypes.oneOf([
    'circle',
    'square',
    'diamond',
    'triangle',
    'triangle-down']),
  /**
   * Type of chart
   */
  type: PropTypes.string,
};

Line.defaultProps = {
  visible: true,
  color: undefined,
  colorLabel: undefined,
  suffix: undefined,
  yAxis: 0,
  dash: 'Solid',
  marker: 'circle',
  type: 'spline'
};

export {
  Line
};
