import * as React from 'react';
import * as PropTypes from 'prop-types';

import { TimelineStep as _TimelineStep, TimelineRow, TimelineBullet } from './styled';

export type LocalTimelineStepProps = {
  a11yDescriptionId?: string;
  a11yTitleId?: string;
  children: React.ReactNode;
  lineColor?: string;
  progressColor?: string;
};
export type LocalTimelineRowProps = {
  lineColor?: string;
};

export type TimelineStepProps = LocalTimelineStepProps;
export type TimelineRowProps = LocalTimelineRowProps;

const TimelineStep: React.FunctionComponent<LocalTimelineStepProps> = ({
  a11yDescriptionId,
  a11yTitleId,
  children,
  lineColor,
  progressColor
}) => {
  return (
    <TimelineRow lineColor={lineColor} aria-labelledby={a11yTitleId} aria-describedby={a11yDescriptionId}>
      <TimelineBullet backgroundColor={progressColor} />
      <_TimelineStep aria-labelledby={a11yTitleId} aria-describedby={a11yDescriptionId}>
        {children}
      </_TimelineStep>
    </TimelineRow>
  );
};

TimelineStep.propTypes = {
  a11yDescriptionId: PropTypes.string,
  a11yTitleId: PropTypes.string,
  children: PropTypes.node.isRequired,
  lineColor: PropTypes.string,
  progressColor: PropTypes.string
};

TimelineStep.defaultProps = {
  a11yDescriptionId: undefined,
  a11yTitleId: undefined,
  lineColor: undefined,
  progressColor: 'textTint'
};

// @ts-ignore
const C: React.FunctionComponent<TimelineStepProps> = TimelineStep;
export default C;
