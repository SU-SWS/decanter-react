import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from './Button';

/**
 * Alert Component.
 *
 * @param {object} props
 */
export const Alert = (props) => {

  let button = false

  // Lever
  if (props.isSuccess) {
    props.classes.wrapper = classnames(props.classes.wrapper, 'su-bg-digital-red')
    props.classes.body = classnames(props.classes.body, 'su-bg-white')
  }

  if (props.isButton) {
    props.classes.body = classnames(props.classes.body, 'grid-cols-2')
    button = props?.myButton ?? <Button />
  }

  return (
    <div className={classnames('su-alert', props?.classes?.wrapper)}>
      <div className={classnames('su-cc', props?.classes?.container)}>
        <div className={classnames('su-type-2', props?.classes?.body)}>
          Stuff and things.
          {button}
        </div>
      </div>
    </div>
  )
}

// Prop Types.
// -----------------------------------------------------------------------------
Alert.propTypes = {
  // The primary content
  children: PropTypes.node,
  isSuccess: true,
  isError: true,
  isLargeIcon: true,
  hasDissmiss: true,
  labelPosition: [left, right, top, bottom]
}

// Default Props.
// -----------------------------------------------------------------------------
Alert.defaultProps = {
  isSuccess: true,
  isError: true,
  isLargeIcon: true,
  hasDissmiss: true,
  labelPosition: [left, right, top, bottom]
}
