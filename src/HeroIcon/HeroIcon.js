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
import { iconOptions } from '../common/icon/icon.levers';
import getIconClasses from '../common/icon/getIconClasses';

export const HeroIcon = ({ icon, srText, className, ...props }) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  let heroicon;
  let baseStyle;

  // Levers
  // ---------------------------------------------------------------------------
  if (icon && iconOptions.includes(icon)) {
    baseStyle = getIconClasses(icon);
    switch (icon) {
      case 'video':
        heroicon = VideoCameraIcon;
        break;

      case 'play':
        heroicon = PlayIcon;
        break;

      case 'podcast':
        heroicon = MicrophoneIcon;
        break;

      case 'external':
        heroicon = ArrowRightIcon;
        break;

      case 'arrow-narrow-right':
      case 'more':
        heroicon = ArrowRightIcon;
        break;

      case 'download':
        heroicon = DownloadIcon;
        break;

      case 'email':
        heroicon = MailIcon;
        break;

      case 'chevron-down':
      case 'jump':
        heroicon = ChevronDownIcon;
        break;

      case 'chevron-right':
      case 'action':
        heroicon = ChevronRightIcon;
        break;

      case 'lock':
        heroicon = LockClosedIcon;
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
  icon: PropTypes.oneOf(iconOptions),

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
