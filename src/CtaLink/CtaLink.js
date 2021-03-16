import React from 'react';
import PropTypes from 'prop-types';
import { ctaLinkIcons, ctaLinkDisplay, ctaLinkColors } from './CtaLink.levers';
import Icon from 'react-hero-icon';
import clsxd from 'clsx-dedupe';

/**
 * CTA Link Component
 *
 */
export const CtaLink = ({ className, text, element, display, link, color, icon, ref, ...props }) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // display
  if (display && ctaLinkDisplay.includes(display)) {
    switch (display) {
      case 'inline-block':
        levers.display = 'su-inline-block';
        break;

      case 'block':
        levers.display = 'su-block';
        break;

      case 'flex':
        levers.display = 'su-flex';
        break;
    }
  }

  // color
  if (color && ctaLinkColors.includes(color)) {
    switch (color) {
      case 'red':
        levers.color = 'su-text-digital-red hocus:su-text-black';
        break;

      case 'blue':
        levers.color = 'su-text-digital-blue hocus:su-text-black';
        break;

      case 'white':
        levers.color = 'su-text-white hocus:su-text-white';
        break;
    }
  }

  // icon
  let LinkIcon = '';

  if (icon && ctaLinkIcons.includes(icon)) {
    switch (icon) {
      case 'action':
        LinkIcon = <Icon icon='chevron-right' type='solid' aria-hidden={true} className={clsxd('su-inline-block su-h-1em su-w-1em su-ml-4 su--mt-2')}/>;
        break;

      case 'external':
        LinkIcon = <Icon icon='arrow-up' type='solid' aria-hidden={true} className={clsxd('su-inline-block su-h-08em su-w-08em su-ml-4 su--mt-2 su-transform su-rotate-45')}/>;
        break;

      case 'lock':
        LinkIcon = <Icon icon='lock-closed' type='solid' aria-hidden={true} className={clsxd('su-inline-block su-h-08em su-w-08em su-ml-4 su--mt-3')}/>;
        break;

      case 'download':
        LinkIcon = <Icon icon='download' type='solid' aria-hidden={true} className={clsxd('su-inline-block su-h-08em su-w-08em su-ml-4 su--mt-3')}/>;
        break;

      case 'video':
        LinkIcon = <Icon icon='play' type='solid' aria-hidden={true} className={clsxd('su-inline-block su-h-08em su-w-08em su-ml-6 su--mt-3')}/>;
        break;

      case 'email':
        LinkIcon = <Icon icon='mail' type='solid' aria-hidden={true} className={clsxd('su-inline-block su-h-08em su-w-08em su-ml-6 su--mt-2')}/>;
        break;

      case 'jump':
        LinkIcon = <Icon icon='chevron-down' type='solid' aria-hidden={true} className={clsxd('su-inline-block su-h-1em su-w-1em su-ml-4 su--mt-2')}/>;
        break;

      case 'none':
        break;
    }
  }

  return (
    <a
      className={clsxd('su-cta-link su-no-underline hover:su-underline focus:su-underline', levers.display, levers.color, className)}
      href={link}
      ref={ref}
      {...props}
    >
      {text}
      {LinkIcon}
    </a>
  );
};

CtaLink.propTypes = {
  // HTML CtaLink type.
  display: PropTypes.oneOf(ctaLinkDisplay),
  color: PropTypes.oneOf(ctaLinkColors),
  icon: PropTypes.oneOf(ctaLinkIcons),

  // CSS Classes.
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),

  // Children
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node
  ])
};

// Default Props.
// -----------------------------------------------------------------------------
CtaLink.defaultProps = {
  display: 'block',
  icon: 'action',
  color: 'blue',
  ref: null
};
