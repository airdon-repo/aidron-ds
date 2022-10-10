import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const parseCircularValue = (scale) => 80 - ((scale / 100) * 69) + 'px';
const linearProgress = keyframes`
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
`;
const linearProgressFeedback = keyframes`
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
`;
const circularProgress = keyframes`
  0% {
    transform-origin: 50% 50%;
  }
  100% {
    transform: rotate(360deg);
  }
`;
const circularProgressInner = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`;
const StyledProgress = styled.div`
  &.circular:not(.controlled) {
    animation-name: ${circularProgress};
    svg {
      circle {
        animation-name: ${circularProgressInner};
      }
    }
  }
  .progress-bar {
    &:first-child {
      animation-name: ${linearProgress};
    }
    &:last-child {
      animation-name: ${linearProgressFeedback};
    }
  }
`;

const Progress = ({
  width,
  circular,
  determinate,
  value,
}) => {
  if (determinate) {
    if (circular) {
      return (
        <StyledProgress
          data-testid="progress"
          className={['ragnarok', 'progress', 'circular', 'controlled'].join(' ')}
        >
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="11" fill="none" strokeWidth="2" style={{ strokeDashoffset: parseCircularValue(value) }} />
          </svg>
        </StyledProgress>
      );
    }
    return (
      <progress
        data-testid="progress"
        max="100"
        value={value ? value.toString() : 0}
        style={!circular ? { width } : {}}
        className={[
          'ragnarok',
          'progress'
        ].join(' ')}
      />
    );
  }
  if (circular) {
    return (
      <StyledProgress
        data-testid="progress"
        className={['ragnarok', 'progress', 'circular'].join(' ')}
      >
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11" fill="none" strokeWidth="2" />
        </svg>
      </StyledProgress>
    );
  }
  return (
    <StyledProgress
      // role="progressbar"
      data-testid="progress"
      style={!circular ? { width } : {}}
      className={[
        'ragnarok',
        'progress'
      ].join(' ')}
    >
      <div className="progress-bar" />
      <div className="progress-bar" />
    </StyledProgress>
  );
};

Progress.propTypes = {
  /**
   * Component's width
   */
  width: PropTypes.string,
  /**
   * Should it be circular?
   */
  circular: PropTypes.bool,
  /**
   * Has a determinate progress?
   */
  determinate: PropTypes.bool,
  /**
   * If it is determinate, what is the value of it?
   */
  value: PropTypes.number
};

Progress.defaultProps = {
  width: '100%',
  circular: undefined,
  determinate: undefined,
  value: 0
};

export {
  Progress
};
