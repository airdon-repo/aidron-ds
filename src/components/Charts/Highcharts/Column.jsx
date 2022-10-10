import PropTypes from 'prop-types';

const Column = ({
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

Column.propTypes = {
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
   * Type of chart
   */
  type: PropTypes.string,
};

Column.defaultProps = {
  visible: true,
  color: undefined,
  colorLabel: undefined,
  suffix: undefined,
  yAxis: 0,
  type: 'column'
};

export {
  Column
};
