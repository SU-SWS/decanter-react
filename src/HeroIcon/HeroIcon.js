/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { dcnb } from 'cnbuilder';
import { VideoCameraIcon, MicrophoneIcon } from '@heroicons/react/outline';
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  DownloadIcon,
  MailIcon,
  PlayIcon,
} from '@heroicons/react/solid';
import { SrOnlyText } from '../SrOnlyText/SrOnlyText';
import { heroIconOptions } from './HeroIcon.levers';

export const HeroIcon = ({ icon, srText, isAnimate, className, ...props }) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  let baseStyle = 'su-w-08em su-ml-03em su--mt-02em';
  let animateStyle = 'group-hocus:su-translate-x-02em';
  let transformStyle = '';

  // Levers
  // ---------------------------------------------------------------------------
  if (isAnimate) {
    transformStyle = 'su-transform-gpu';
  }

  let defaultIcon = (
    <ArrowRightIcon
      aria-hidden="true"
      className={dcnb(
        'su-transition',
        baseStyle,
        animateStyle,
        transformStyle,
        className
      )}
      {...props}
    />
  );

  if (icon && heroIconOptions.includes(icon)) {
    switch (icon) {
      case 'video':
        baseStyle = 'su-w-08em su-mt-[-0.2em]';
        animateStyle = 'group-hocus:su-translate-x-02em';
        defaultIcon = (
          <VideoCameraIcon
            aria-hidden="true"
            className={dcnb(
              'su-transition',
              baseStyle,
              animateStyle,
              transformStyle,
              className
            )}
            {...props}
          />
        );
        break;

      case 'play':
        baseStyle = 'su-w-08em su-ml-7 su--mt-3';
        animateStyle = 'group-hocus:su-translate-x-02em';
        defaultIcon = (
          <PlayIcon
            aria-hidden="true"
            className={dcnb(
              'su-transition',
              baseStyle,
              animateStyle,
              transformStyle,
              className
            )}
            {...props}
          />
        );
        break;

      case 'podcast':
        baseStyle = 'su-w-08em su-mt-[-0.25em]';
        animateStyle = 'group-hocus:su-translate-x-02em';
        defaultIcon = (
          <MicrophoneIcon
            aria-hidden="true"
            className={dcnb(
              'su-transition',
              baseStyle,
              animateStyle,
              transformStyle,
              className
            )}
            {...props}
          />
        );
        break;

      case 'external':
        baseStyle =
          'su-w-08em su-ml-02em su--rotate-45 group-hocus:su--rotate-45';
        animateStyle =
          'group-hocus:su-translate-x-01em group-hocus:su--translate-y-01em';
        defaultIcon = (
          <ArrowRightIcon
            aria-hidden="true"
            className={dcnb(
              'su-transition',
              baseStyle,
              animateStyle,
              transformStyle,
              className
            )}
            {...props}
          />
        );
        break;

      case 'arrow-narrow-right':
        baseStyle = 'su-w-08em su-ml-03em su--mt-02em';
        animateStyle = 'group-hocus:su-translate-x-02em';
        defaultIcon = (
          <ArrowRightIcon
            aria-hidden="true"
            className={dcnb(
              'su-transition',
              baseStyle,
              animateStyle,
              transformStyle,
              className
            )}
            {...props}
          />
        );
        break;

      case 'download':
        baseStyle = 'su-w-08em su-ml-4 su--mt-3';
        animateStyle = 'group-hocus:su-translate-y-02em';
        defaultIcon = (
          <DownloadIcon
            aria-hidden="true"
            className={dcnb(
              'su-transition',
              baseStyle,
              animateStyle,
              transformStyle,
              className
            )}
            {...props}
          />
        );
        break;

      case 'email':
        baseStyle = 'su-w-08em su-ml-7 su--mt-2';
        animateStyle = 'group-hocus:su-translate-x-02em';
        defaultIcon = (
          <MailIcon
            aria-hidden="true"
            className={dcnb(
              'su-transition',
              baseStyle,
              animateStyle,
              transformStyle,
              className
            )}
            {...props}
          />
        );
        break;

      case 'chevron-down':
        baseStyle = 'su-w-[1.1em] su-ml-4 su--mt-3';
        animateStyle = 'group-hocus:su-translate-y-02em';
        defaultIcon = (
          <ChevronDownIcon
            aria-hidden="true"
            className={dcnb(
              'su-transition',
              baseStyle,
              animateStyle,
              transformStyle,
              className
            )}
            {...props}
          />
        );
        break;

      case 'chevron-right':
        baseStyle = 'su-w-1em su-ml-02em su--mt-4';
        animateStyle = 'group-hocus:su-translate-x-02em';
        defaultIcon = (
          <ChevronRightIcon
            aria-hidden="true"
            className={dcnb(
              'su-transition',
              baseStyle,
              animateStyle,
              transformStyle,
              className
            )}
            {...props}
          />
        );
        break;

      default:
      // none
    }
  }

  const heroIcon = defaultIcon;

  return (
    <>
      {heroIcon}
      {srText && <SrOnlyText srText={srText} />}
    </>
  );
};

HeroIcon.propTypes = {
  /**
   * Hero Icon options
   */
  icon: PropTypes.oneOf(heroIconOptions),

  /**
   * Screen Reader Text
   */
  srText: PropTypes.string,

  /**
   * Is the icon animated?
   */
  isAnimate: PropTypes.bool,

  /**
   * CSS Class names.
   */
  className: PropTypes.string,
};

// Default Props.
// -----------------------------------------------------------------------------
HeroIcon.defaultProps = {
  isAnimate: true,
};
