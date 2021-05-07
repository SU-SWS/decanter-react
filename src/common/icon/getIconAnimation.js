import { dcnb } from "cnbuilder";

/**
 * Retrieve group of classes needed for requested type of CTA icon animation
 *
 */

const getIconAnimation = (animate) => {
  let classes = "";

  if (animate !== "none") {
    classes = "su-transition-transform group-hocus:su-transform";
  }

  // Add specific classes for each type of animation
  switch (animate) {
    case "top-right":
      classes = dcnb(
        classes,
        "group-hocus:su-translate-x-01em group-hocus:su--translate-y-01em"
      );
      break;

    case "down":
      classes = dcnb(classes, "group-hocus:su-translate-y-02em");
      break;

    case "right":
      classes = dcnb(classes, "group-hocus:su-translate-x-02em");
      break;

    default:
    // None.
  }

  return classes;
};

export default getIconAnimation;
