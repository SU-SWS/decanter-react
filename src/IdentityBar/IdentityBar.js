import React from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import { identityBarColors } from "./IdentityBar.levers";
import { Container } from "../Container/Container";
import { Logo } from "../Logo/Logo";

/**
 * Stanford Identity Bar Component.
 *
 */
export const IdentityBar = ({ className, ...props }) => {
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // props.color
  if (props.color && identityBarColors.includes(props.color)) {
    switch (props.color) {
      case "white":
        levers.wrapper = "su-bg-white";
        levers.logo = "cardinal-red";
        break;

      case "cardinal-red":
        levers.wrapper = "su-bg-cardinal-red";
        levers.logo = "white";
        break;

      case "digital-red":
        levers.wrapper = "su-bg-digital-red";
        levers.logo = "white";
        break;

      case "black":
        levers.wrapper = "su-bg-black";
        levers.logo = "white";
        break;

      default:
      // none.
    }
  }

  return (
    <Container
      width="site"
      className={dcnb(
        "su-identity-bar su-pt-5 su-pb-1",
        levers.wrapper,
        className
      )}
    >
      <Logo
        className="su-text-20 su-leading-none"
        color={levers.logo}
        type="full"
      />
    </Container>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
IdentityBar.propTypes = {
  /**
   * Which background color theme?
   */
  color: PropTypes.oneOf(identityBarColors),

  /**
   * Custom CSS classes, e.g., to control position
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

// Default Props.
// -----------------------------------------------------------------------------
IdentityBar.defaultProps = {
  color: "cardinal-red",
};
