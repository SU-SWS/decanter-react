import React from "react";
import PropTypes from "prop-types";
import Icon from "react-hero-icon";
import { dcnb } from "cnbuilder";
import { ctaLinkColors } from "./CtaLink.levers";
import { iconOptions, iconAnimations } from "../common/icon/icon.levers";
import getIconOption from "../common/icon/getIconOption";
import getIconClasses from "../common/icon/getIconClasses";
import getIconAnimation from "../common/icon/getIconAnimation";
import { SrOnlyText } from "../SrOnlyText/SrOnlyText";

/**
 * CTA Link Component
 *
 */
export const CtaLink = React.forwardRef(
  (
    {
      className,
      children,
      text,
      srText,
      color,
      icon,
      iconProps,
      animate,
      ...props
    },
    ref
  ) => {
    // Defaults & Variables.
    // ---------------------------------------------------------------------------
    const levers = {};
    let Element = "a";

    // Determine whether a or div tag should be used based on children props
    // ---------------------------------------------------------------------------
    if (children) {
      Element = "span";
    }

    // Levers
    // ---------------------------------------------------------------------------

    // color
    if (color && ctaLinkColors.includes(color)) {
      switch (color) {
        case "red":
          levers.color = "su-text-digital-red hocus:su-text-black";
          break;

        case "blue":
          levers.color = "su-text-digital-blue hocus:su-text-black";
          break;

        case "white":
          levers.color = "su-text-white hocus:su-text-white";
          break;

        default:
        // none.
      }
    }

    // icon
    let heroicon = "";

    if (icon && iconOptions.includes(icon)) {
      heroicon = getIconOption(icon);
      levers.icon = getIconClasses(icon);
    }

    // animate
    // Add specific classes for each type of animation
    if (animate && iconAnimations.includes(animate)) {
      levers.animate = getIconAnimation(animate);
    }

    // Icon className.
    const { className: iconClasses, ...iProps } = iconProps || {};

    return (
      <Element
        className={dcnb(
          "su-cta-link su-text-19 md:su-text-20 su-block su-w-fit su-no-underline hover:su-underline focus:su-underline su-group su-transition-colors",
          levers.color,
          levers.size,
          levers.variant,
          className
        )}
        ref={ref}
        {...props}
      >
        {children || text}
        {srText && <SrOnlyText srText={` ${srText}`} />}
        {icon && (
          <Icon
            icon={heroicon}
            type="solid"
            aria-hidden
            className={dcnb(
              "su-inline-block",
              levers.icon,
              levers.animate,
              iconClasses
            )}
            {...iProps}
          />
        )}
      </Element>
    );
  }
);

CtaLink.propTypes = {
  /**
   * Css class names
   */
  className: PropTypes.string,

  /**
   * Link color (for non-button link only)
   */
  color: PropTypes.oneOf(ctaLinkColors),

  /**
   * Icon options
   */
  icon: PropTypes.oneOf(iconOptions),

  /**
   * Icon options
   */
  iconProps: PropTypes.objectOf(PropTypes.any),

  /**
   * Icon animation on hover/focus
   */
  animate: PropTypes.oneOf(iconAnimations),

  /**
   * URL
   */
  href: PropTypes.string,

  /**
   * Link text
   */
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),

  /**
   * Optional text for screen readers
   */
  srText: PropTypes.string,
};

// Default Props.
// -----------------------------------------------------------------------------
CtaLink.defaultProps = {
  icon: "action",
};
