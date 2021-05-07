/**
 * Retrieve group of classes to render button size corresponding to prop value
 *
 */

const getButtonSize = (size) => {
  let classes = "";

  // Add specific classes for each type of animation
  switch (size) {
    case "big":
      classes = "su-px-34 su-py-15 su-text-20 md:su-text-24";
      break;

    case "small":
      classes = "su-px-19 su-py-9 su-text-16 md:su-text-18";
      break;

    case "minimal":
      classes = "su-p-0";
      break;

    case "default":
      classes = "su-px-26 su-pt-10 su-pb-11 su-text-16 md:su-text-20";
      break;

    default:
    // none.
  }

  return classes;
};

export default getButtonSize;
