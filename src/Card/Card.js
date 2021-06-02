import React from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import { cardElements } from "./Card.levers";
import { Superhead } from "./Card.Superhead";
import { Headline } from "./Card.Headline";
import { Content } from "./Card.Content";
import { Image } from "./Card.Image";

/**
 * Card Component
 *
 * HTML card element
 */

const CardRoot = ({ className, children, element, isMinimal, ...props }) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  // props.element
  let Element = "div";

  if (element && cardElements.includes(element)) {
    Element = element;
  }

  let wrapperClasses =
    "su-bg-white su-text-black su-border su-border-solid su-border-black-10 su-shadow";

  if (isMinimal) {
    wrapperClasses = "";
  }

  return (
    <Element
      className={dcnb(
        "card su-block su-max-w-600 su-basefont-23",
        wrapperClasses,
        className
      )}
      {...props}
    >
      {children}
    </Element>
  );
};

CardRoot.displayName = "Card";

// Subcomponents
// ---------------------------------------------------------------------------





/**
 * Exports
 */
export const Card = Object.assign(CardRoot, {
  Superhead,
  Headline,
  Content,
  Image,
});

// Prop Types.
// -----------------------------------------------------------------------------
CardRoot.propTypes = {
  /**
   * The HTML element of the card.
   */
  element: PropTypes.oneOf(cardElements),
  /**
   * Is the card minimal style disabled?
   */
  isMinimal: PropTypes.bool,

  // CSS Classes.
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),

  // Children
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
};

// Default Props.
// -----------------------------------------------------------------------------
CardRoot.defaultProps = {
  isMinimal: false,
};
