import * as React from 'react';
import render from '../../_utils/tests/render';
import Timeline from '../Timeline';

describe('Timeline', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Timeline>
        <Timeline.Step a11yTitleId="StepHeading1" a11yDescriptionId="StepDetail1">
          <Timeline.StepHeading a11yTitleId="StepHeading1">Step one Heading</Timeline.StepHeading>
          <Timeline.StepDetail a11yDescriptionId="StepDetail1">Step one details goes here</Timeline.StepDetail>
        </Timeline.Step>
        <Timeline.Step a11yTitleId="StepHeading2" a11yDescriptionId="StepDetail2">
          <Timeline.StepHeading a11yTitleId="StepHeading2">Step two Heading</Timeline.StepHeading>
          <Timeline.StepDetail a11yDescriptionId="StepDetail2">Step two details goes here</Timeline.StepDetail>
        </Timeline.Step>
        <Timeline.Step a11yTitleId="StepHeading3" a11yDescriptionId="StepDetail3">
          <Timeline.StepHeading a11yTitleId="StepHeading3">Step three Heading</Timeline.StepHeading>
          <Timeline.StepDetail a11yDescriptionId="StepDetail3">Step three details goes here</Timeline.StepDetail>
        </Timeline.Step>
      </Timeline>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('with custom color in step', () => {
    it('renders correctly', () => {
      const { container } = render(
        <Timeline>
          <Timeline.Step a11yTitleId="StepHeading1" a11yDescriptionId="StepDetail1">
            <Timeline.StepHeading a11yTitleId="StepHeading1">Step one Heading</Timeline.StepHeading>
            <Timeline.StepDetail a11yDescriptionId="StepDetail1">Step one details goes here</Timeline.StepDetail>
          </Timeline.Step>
          <Timeline.Step
            progressColor="green"
            lineColor="green"
            a11yTitleId="StepHeading2"
            a11yDescriptionId="StepDetail2"
          >
            <Timeline.StepHeading a11yTitleId="StepHeading2">Step two Heading</Timeline.StepHeading>
            <Timeline.StepDetail a11yDescriptionId="StepDetail2">Step two details goes here</Timeline.StepDetail>
          </Timeline.Step>
          <Timeline.Step a11yTitleId="StepHeading3" a11yDescriptionId="StepDetail3">
            <Timeline.StepHeading a11yTitleId="StepHeading3">Step three Heading</Timeline.StepHeading>
            <Timeline.StepDetail a11yDescriptionId="StepDetail3">Step three details goes here</Timeline.StepDetail>
          </Timeline.Step>
        </Timeline>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('with activeStep', () => {
    it('renders correctly', () => {
      const { container } = render(
        <Timeline activeStep="StepHeading2" progressColor="purple" lineColor="purple">
          <Timeline.Step a11yTitleId="StepHeading1" a11yDescriptionId="StepDetail1">
            <Timeline.StepHeading a11yTitleId="StepHeading1">Step one Heading</Timeline.StepHeading>
            <Timeline.StepDetail a11yDescriptionId="StepDetail1">Step one details goes here</Timeline.StepDetail>
          </Timeline.Step>
          <Timeline.Step a11yTitleId="StepHeading2" a11yDescriptionId="StepDetail2">
            <Timeline.StepHeading a11yTitleId="StepHeading2">Step two Heading</Timeline.StepHeading>
            <Timeline.StepDetail a11yDescriptionId="StepDetail2">Step two details goes here</Timeline.StepDetail>
          </Timeline.Step>
          <Timeline.Step a11yTitleId="StepHeading3" a11yDescriptionId="StepDetail3">
            <Timeline.StepHeading a11yTitleId="StepHeading3">Step three Heading</Timeline.StepHeading>
            <Timeline.StepDetail a11yDescriptionId="StepDetail3">Step three details goes here</Timeline.StepDetail>
          </Timeline.Step>
        </Timeline>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
