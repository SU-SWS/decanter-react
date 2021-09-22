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

  let heroicon = ArrowRightIcon;
  let baseStyle = 'su-w-08em su-ml-03em su--mt-02em';
  let animate = 'group-hocus:su-translate-x-02em';

  // Levers
  // ---------------------------------------------------------------------------
  if (icon && heroIconOptions[icon]) {
    switch (icon) {
      case 'video':
        heroicon = VideoCameraIcon;
        baseStyle = 'su-w-08em su-mt-[-0.2em]';
        animate = 'group-hocus:su-translate-x-02em';
        break;

      case 'play':
        heroicon = PlayIcon;
        baseStyle = 'su-w-08em su-ml-7 su--mt-3';
        animate = 'group-hocus:su-translate-x-02em';
        break;

      case 'podcast':
        heroicon = MicrophoneIcon;
        baseStyle = 'su-w-08em su-mt-[-0.25em]';
        animate = 'group-hocus:su-translate-x-02em';
        break;

      case 'external':
        heroicon = 'ArrowRightIcon';
        baseStyle =
          'su-w-08em su-ml-02em su--rotate-45 group-hocus:su--rotate-45';
        animate =
          'group-hocus:su-translate-x-01em group-hocus:su--translate-y-01em';
        break;

      case 'arrow-narrow-right':
        heroicon = ArrowRightIcon;
        baseStyle = 'su-w-08em su-ml-03em su--mt-02em';
        animate = 'group-hocus:su-translate-x-02em';
        break;

      case 'download':
        heroicon = DownloadIcon;
        baseStyle = 'su-w-08em su-ml-4 su--mt-3';
        animate = 'group-hocus:su-translate-y-02em';
        break;

      case 'email':
        heroicon = MailIcon;
        baseStyle = 'su-w-08em su-ml-7 su--mt-2';
        animate = 'group-hocus:su-translate-x-02em';
        break;

      case 'chevron-down':
        heroicon = ChevronDownIcon;
        baseStyle = 'su-w-[1.1em] su-ml-4 su--mt-3';
        animate = 'group-hocus:su-translate-y-02em';
        break;

      case 'chevron-right':
        heroicon = ChevronRightIcon;
        baseStyle = 'su-w-1em su-ml-02em su--mt-4';
        animate = 'group-hocus:su-translate-x-02em';
        break;

      default:
      // none
    }
  }

  const IconElement = heroicon;
  let animateStyle = '';

  if (isAnimate) {
    animateStyle = dcnb('su-transform-gpu', animate);
  }

  const heroIconStyle = dcnb('su-transition', baseStyle, animateStyle);

  return (
    <>
      <IconElement
        aria-hidden="true"
        className={dcnb(heroIconStyle, className)}
        {...props}
      />
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
  icon: 'arrow-narrow-right',
  isAnimate: true,
};
