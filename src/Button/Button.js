import React from "react";
import PropTypes from "prop-types";
import Icon from "react-hero-icon";
import { dcnb } from "cnbuilder";
import { buttonVariants, buttonTypes } from "./Button.levers";
import { buttonSizes } from "../common/button/button.levers";
import { iconOptions, iconAnimations } from "../common/icon/icon.levers";
import getButtonSize from "../common/button/getButtonSize";
import getIconOption from "../common/icon/getIconOption";
import getIconClasses from "../common/icon/getIconClasses";
import getIconAnimation from "../common/icon/getIconAnimation";

/**
 * Button Component
 *
 * HTML button element
 */
export const Button = React.forwardRef(
  (
    {
      className,
      children,
      onClick,
      variant,
      size,
      type,
      icon,
      iconProps,
      animate,
      isDisabled,
      ...props
    },
    ref
  ) => {
    // Defaults & Variables.
    // ---------------------------------------------------------------------------
    const levers = {};

    // Levers
    // ---------------------------------------------------------------------------

    // variant
    if (variant && buttonVariants.includes(variant)) {
      switch (variant) {
        case "solid":
          levers.variant =
            "su-bg-digital-red su-text-white su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black su-transition-colors";
          break;

        case "outline":
          levers.variant =
            "su-bg-white hocus:su-bg-white su-text-digital-red hocus:su-text-black su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black su-transition-colors";
          break;

        case "ghost":
          levers.variant = dcnb(
            "su-bg-transparent hocus:su-bg-transparent su-text-white hocus:su-text-white su-border-2 su-border-white su-border-solid"
          );
          break;

        case "unset":
          levers.variant = "su-bg-transparent hocus:su-bg-transparent";
          break;

        default:
        // None.
      }
    }

    // size
    if (size && buttonSizes.includes(size)) {
      levers.size = getButtonSize(size);
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

    // Is disabled
    if (isDisabled) {
      levers.disabled =
        "su-bg-black-20 su-text-black su-border-2 su-border-black-20 su-border-solid su-pointer-events-none";
      levers.variant = dcnb(levers.variant, {
        "su-bg-digital-red": false,
        "su-bg-white": false,
        "su-text-digital-red": false,
        "su-border-digital-red": false,
        "hover:su-border-black": false,
        "focus:su-border-black": false,
        "su-text-white": false,
      });
    }

    // Icon className.
    const { className: iconClasses, ...iProps } = iconProps || {};

    return (
      <button
        className={dcnb(
          "su-button su-group su-leading-display",
          levers.variant,
          levers.size,
          levers.disabled,
          className
        )}
        onClick={onClick}
        type={type} // eslint-disable-line react/button-has-type
        disabled={isDisabled}
        ref={ref}
        {...props}
      >
        {children}
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
      </button>
    );
  }
);

Button.propTypes = {
  /**
   * HTML button type attribute
   */
  type: PropTypes.oneOf(buttonTypes),

  /**
   * Variant/button style
   */
  variant: PropTypes.oneOf(buttonVariants),

  /**
   * Button size
   */
  size: PropTypes.oneOf(buttonSizes),

  /**
   * Icon options
   */
  icon: PropTypes.oneOf(iconOptions),

  /**
   * Icon Properties
   */
  iconProps: PropTypes.objectOf(PropTypes.any),

  /**
   * Icon animation on hover/focus
   */
  animate: PropTypes.oneOf(iconAnimations),

  /**
   * Is the button disabled?
   */
  isDisabled: PropTypes.bool,

  /**
   * Optional click handler.
   */
  onClick: PropTypes.func,

  /**
   * CSS Class names.
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  // Children
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),

  // React ref.
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }), // eslint-disable-line react/forbid-prop-types
  ]),
};

// Default Props.
// -----------------------------------------------------------------------------
Button.defaultProps = {
  onClick: undefined,
  type: "button",
  variant: "solid",
  size: "default",
  isDisabled: false,
};
