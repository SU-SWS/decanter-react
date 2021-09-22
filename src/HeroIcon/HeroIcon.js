/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { dcnb } from 'cnbuilder';
import {
  VideoCameraIcon,
  MicrophoneIcon,
  LockClosedIcon,
} from '@heroicons/react/outline';
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

export const HeroIcon = ({ icon, srText, className, ...props }) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  let heroicon;
  let baseStyle;

  // Levers
  // ---------------------------------------------------------------------------
  if (icon && heroIconOptions.includes(icon)) {
    switch (icon) {
      case 'video':
        heroicon = VideoCameraIcon;
        baseStyle = 'su-w-08em su-mt-[-0.2em]';
        break;

      case 'play':
        heroicon = PlayIcon;
        baseStyle = 'su-w-08em su-ml-7 su--mt-3';
        break;

      case 'podcast':
        heroicon = MicrophoneIcon;
        baseStyle = 'su-w-08em su-mt-[-0.25em]';
        break;

      case 'external':
        heroicon = ArrowRightIcon;
        baseStyle =
          'su-w-08em su-ml-02em su--rotate-45 group-hocus:su--rotate-45';
        break;

      case 'arrow-narrow-right':
      case 'more':
        heroicon = ArrowRightIcon;
        baseStyle = 'su-w-08em su-ml-03em su--mt-02em';
        break;

      case 'download':
        heroicon = DownloadIcon;
        baseStyle = 'su-w-08em su-ml-4 su--mt-3';
        break;

      case 'email':
        heroicon = MailIcon;
        baseStyle = 'su-w-08em su-ml-7 su--mt-2';
        break;

      case 'chevron-down':
      case 'jump':
        heroicon = ChevronDownIcon;
        baseStyle = 'su-w-[1.1em] su-ml-4 su--mt-3';
        break;

      case 'chevron-right':
      case 'action':
        heroicon = ChevronRightIcon;
        baseStyle = 'su-w-1em su-ml-02em su--mt-4';
        break;

      case 'lock':
        heroicon = LockClosedIcon;
        baseStyle = 'su-w-1em su-ml-02em su--mt-4';
        break;

      default:
      // none
    }
  }
  const Icon = heroicon;

  const heroIconStyle = dcnb('su-transition', baseStyle);

  return (
    <>
      <Icon
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
   * CSS Class names.
   */
  className: PropTypes.string,
};

// Default Props.
// -----------------------------------------------------------------------------
HeroIcon.defaultProps = {};
