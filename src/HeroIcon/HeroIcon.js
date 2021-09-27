/* eslint-disable import/no-unresolved */
import { MicrophoneIcon, VideoCameraIcon } from '@heroicons/react/outline';
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  DownloadIcon,
  LockClosedIcon,
  MailIcon,
  PlayIcon,
} from '@heroicons/react/solid';
import { dcnb } from 'cnbuilder';
import PropTypes from 'prop-types';
import React from 'react';
import getIconClasses from '../common/icon/getIconClasses';
import { iconOptions } from '../common/icon/icon.levers';
import { SrOnlyText } from '../SrOnlyText/SrOnlyText';

export const HeroIcon = ({ icon, srText, className, ...props }) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  let Icon;
  let baseStyle;

  // Levers
  // ---------------------------------------------------------------------------
  if (icon && iconOptions.includes(icon)) {
    baseStyle = getIconClasses(icon);
    switch (icon) {
      case 'video':
        Icon = VideoCameraIcon;
        break;

      case 'play':
        Icon = PlayIcon;
        break;

      case 'podcast':
        Icon = MicrophoneIcon;
        break;

      case 'external':
        Icon = ArrowRightIcon;
        break;

      case 'arrow-narrow-right':
      case 'more':
        Icon = ArrowRightIcon;
        break;

      case 'download':
        Icon = DownloadIcon;
        break;

      case 'email':
        Icon = MailIcon;
        break;

      case 'chevron-down':
      case 'jump':
        Icon = ChevronDownIcon;
        break;

      case 'chevron-right':
      case 'action':
        Icon = ChevronRightIcon;
        break;

      case 'lock':
        Icon = LockClosedIcon;
        break;

      default:
      // none
    }
  }

  const heroIconStyle = dcnb('su-transition', baseStyle);

  return (
    <>
      {Icon && (
        <>
          <Icon
            aria-hidden="true"
            className={dcnb(heroIconStyle, className)}
            {...props}
          />
          {srText && <SrOnlyText srText={srText} />}
        </>
      )}
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
