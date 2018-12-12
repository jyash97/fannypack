// @flow
import React, { type Element, type Node } from 'react';
import { Box, Flex } from '../primitives';
import _Callout, { CalloutContent, CalloutFooter, CalloutHeader, CalloutIcon, CalloutTitle } from './styled';
import CalloutClose from './CalloutClose';
import { getUniqueId } from '../uniqueId';

type Props = {
  a11yDescriptionId?: string,
  a11yTitleId?: string,
  children: Node,
  className?: string,
  closeButtonProps?: Object,
  footer?: string | Element<any>,
  hasTint?: boolean,
  icon?: string,
  onClickClose?: Function,
  showCloseButton?: boolean,
  title?: string | Element<any>,
  type?: 'info' | 'success' | 'danger' | 'warning'
};

const Callout = ({
  a11yDescriptionId,
  a11yTitleId,
  children,
  closeButtonProps,
  footer,
  hasTint,
  icon,
  onClickClose,
  showCloseButton,
  title,
  type,
  ...props
}: Props) => {
  return (
    <_Callout a11yDescriptionId={a11yDescriptionId} a11yTitleId={a11yTitleId} hasTint={hasTint} type={type} {...props}>
      <Flex>
        {(type || icon) && (
          <CalloutTitle>
            <CalloutIcon icon={type || icon} color={type} />
          </CalloutTitle>
        )}
        <Box>
          {title && (
            <CalloutHeader>
              {typeof title === 'string' ? <CalloutTitle id={a11yTitleId}>{title}</CalloutTitle> : title}
            </CalloutHeader>
          )}
          <CalloutContent id={a11yDescriptionId}>{children}</CalloutContent>
          {footer && <CalloutFooter>{footer}</CalloutFooter>}
        </Box>
      </Flex>
      {showCloseButton && <CalloutClose onClickClose={onClickClose} {...closeButtonProps} />}
    </_Callout>
  );
};

Callout.defaultProps = {
  a11yDescriptionId: getUniqueId('Callout'),
  a11yTitleId: getUniqueId('Callout'),
  children: undefined,
  className: undefined,
  closeButtonProps: {},
  footer: undefined,
  hasTint: false,
  icon: undefined,
  onClickClose: undefined,
  showCloseButton: false,
  title: undefined,
  type: undefined
};

export default Callout;
