import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-hero-icon';
import { dcnb } from 'cnbuilder';
import { alertTypes, lightText, darkText, redText } from './Alert.levers';
import { DismissButton } from '../DismissButton/DismissButton';

/**
 * Alert Component.
 *
 * For displaying a notification that keeps people informed of a status, or for
 * displaying a validation message that alerts someone of an important piece of
 * information.
 *
 */
export const Alert = ({ classes = {}, children, ...props }) => {
  // Defaults & Variables
  const levers = {};
  const iconProps = { height: 20, width: 20 };
  const [isDismissed, setDismissed] = useState(false);

  // Levers
  // ---------------------------------------------------------------------------
  levers.wrapper = 'su-bg-foggy-light';
  levers.dismiss = 'black';

  // Is large Icon.
  if (props.isLargeIcon) {
    iconProps.height = 60;
    iconProps.width = 60;
  }

  // Default Icon.
  let defaultIcon = (
    <Icon
      icon="bell"
      type="outline"
      aria-hidden="true"
      className={classes.icon}
      {...iconProps}
    />
  );

  // Props.type
  if (props.type && alertTypes.includes(props.type)) {
    switch (props.type) {
      case 'success':
        levers.wrapper = 'su-bg-digital-green su-text-white';
        levers.body = lightText;
        levers.dismiss = 'white';
        defaultIcon = (
          <Icon
            icon="check-circle"
            type="solid"
            aria-hidden="true"
            className={classes.icon}
            {...iconProps}
          />
        );
        break;

      case 'warning':
        levers.wrapper = 'su-bg-illuminating-dark';
        levers.body = darkText;
        levers.dismiss = 'black';
        defaultIcon = (
          <Icon
            icon="exclamation-circle"
            type="solid"
            aria-hidden="true"
            className={classes.icon}
            {...iconProps}
          />
        );
        break;

      case 'info':
        levers.wrapper = 'su-bg-digital-blue su-text-white';
        levers.body = lightText;
        levers.dismiss = 'white';
        defaultIcon = (
          <Icon
            icon="information-circle"
            type="solid"
            aria-hidden="true"
            className={classes.icon}
            {...iconProps}
          />
        );
        break;

      case 'error':
        levers.wrapper = 'su-bg-digital-red su-text-white';
        levers.body = lightText;
        levers.dismiss = 'white';
        defaultIcon = (
          <Icon
            icon="ban"
            type="solid"
            aria-hidden="true"
            className={classes.icon}
            {...iconProps}
          />
        );
        break;

      case 'errorSummary':
        levers.wrapper =
          'su-bg-digital-red su-bg-opacity-20 su-text-digital-red su-link-digital-red';
        levers.body = redText;
        levers.dismiss = 'red';
        defaultIcon = (
          <Icon
            icon="exclamation-circle"
            type="solid"
            aria-hidden="true"
            className={classes.icon}
            {...iconProps}
          />
        );
        break;

      default:
      // none.
    }
  }

  // Partials
  // ---------------------------------------------------------------------------

  const icon = props.icon ?? defaultIcon;
  const DefaultDismiss = (
    <DismissButton
      text="Dismiss"
      srText="alert"
      onClick={() => {
        setDismissed(true);
      }}
      color={levers.dismiss}
      className="su-text-17 su-uppercase su-font-bold su-inline-block su-tracking-widest su-mr-0 su-ml-auto"
      iconProps={{ className: 'su-ml-02em' }}
    />
  );
  const dismissBtn = props.dismissBtn ?? DefaultDismiss;

  // Dismissed State.
  if (isDismissed === true) {
    return null;
  }

  // Render
  // ---------------------------------------------------------------------------
  return (
    <div className={dcnb('su-alert', levers.wrapper, classes.wrapper)}>
      <div
        className={dcnb(
          'su-cc su-flex su-flex-wrap su-rs-py-1 sm:su-items-center',
          levers.container,
          classes.container
        )}
      >
        {props.hasDismiss && (
          <div
            className={dcnb(
              'su-order-3 su-rs-ml-1 su-mt-15 sm:su-mt-0 su-items-center su-flex-shrink su-text-right su-w-full sm:su-w-auto',
              levers.dismissWrapper,
              classes.dismissWrapper
            )}
          >
            {dismissBtn}
          </div>
        )}

        {/* Header Container. */}
        {((props.hasIcon && !props.isIconTop) ||
          (props.hasLabel && !props.isLabelTop)) && (
          <h2
            className={dcnb(
              'su-order-1 su-rs-mr-1 su-mb-15 md:su-mb-0 su-flex su-flex-shrink su-items-center su-w-full md:su-w-max',
              levers.headerWrapper,
              classes.headerWrapper
            )}
          >
            {props.hasIcon && !props.isIconTop && (
              <span
                className={dcnb(
                  'su-mr-5 su-inline-block',
                  levers.headerIcon,
                  classes.headerIcon
                )}
              >
                {icon}
              </span>
            )}

            {props.hasLabel && !props.isLabelTop && (
              <span
                className={dcnb(
                  'su-inline-block su-uppercase su-font-bold su-text-17 su-tracking-widest',
                  levers.label,
                  classes.label
                )}
              >
                {props.label ?? 'Alert:'}
              </span>
            )}
          </h2>
        )}

        {/* Body Container. */}
        <div
          className={dcnb(
            'su-order-2 su-flex-1 su-flex-grow',
            levers.bodyWrapper,
            classes.bodyWrapper
          )}
        >
          {((props.hasIcon && props.isIconTop) ||
            (props.hasLabel && props.isLabelTop)) && (
            <h2 className="su-flex su-items-center su-rs-mb-0">
              {props.hasIcon && props.isIconTop && (
                <span
                  className={dcnb(
                    'su-inline-block su-mr-5 su-text-left su-ml-0',
                    levers.headerIcon,
                    classes.headerIcon
                  )}
                >
                  {icon}
                </span>
              )}

              {props.hasLabel && props.isLabelTop && (
                <span
                  className={dcnb(
                    'su-inline-block su-uppercase su-font-bold su-text-17 su-tracking-widest',
                    levers.label,
                    classes.label
                  )}
                >
                  {props.label ?? 'Alert:'}
                </span>
              )}
            </h2>
          )}

          {props.heading && (
            <h2
              className={dcnb(
                'su-type-1 su-rs-mb-neg1',
                levers.bodyHeading,
                classes.bodyHeading
              )}
            >
              {props.heading}
            </h2>
          )}

          <div className={dcnb('su-text-normal', levers.body, classes.body)}>
            {children}
          </div>

          {props.footer && (
            <div
              className={dcnb(
                'su-rs-mt-0',
                levers.footerWrapper,
                classes.footerWrapper
              )}
            >
              {props.footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------

Alert.propTypes = {
  // Nodes and content.
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
  ]),
  dismissBtn: PropTypes.element,
  icon: PropTypes.element,
  label: PropTypes.string,
  heading: PropTypes.string,
  footer: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
  ]),

  // State and Levers.
  type: PropTypes.oneOf(alertTypes),
  isLargeIcon: PropTypes.bool,
  isLabelTop: PropTypes.bool,
  isIconTop: PropTypes.bool,
  hasDismiss: PropTypes.bool,
  hasIcon: PropTypes.bool,
  hasLabel: PropTypes.bool,

  // The CSS Classname property
  classes: PropTypes.shape({
    wrapper: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ]),
    container: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ]),
    dismissWrapper: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ]),
    headerWrapper: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ]),
    headerIcon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ]),
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ]),
    bodyWrapper: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ]),
    bodyHeading: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ]),
    body: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ]),
    footerWrapper: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ]),
  }),
};

// Default Props.
// -----------------------------------------------------------------------------
Alert.defaultProps = {
  isLargeIcon: false,
  isLabelTop: false,
  isIconTop: false,
  hasDismiss: true,
  hasLabel: true,
  hasIcon: true,
};
