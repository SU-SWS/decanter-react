/**
 * Retrieve icon name corresponding to prop value
 * We are currently using the Heroicon package
 * https://heroicons.com/
 */

const getIconOption = (icon) => {
  let heroicon = "";

  switch (icon) {
    case "more":
      heroicon = "arrow-narrow-right";
      break;

    case "external":
      heroicon = "arrow-up";
      break;

    case "lock":
      heroicon = "lock-closed";
      break;

    case "download":
      heroicon = "download";
      break;

    case "video":
      heroicon = "play";
      break;

    case "email":
      heroicon = "mail";
      break;

    case "jump":
      heroicon = "chevron-down";
      break;

    case "action":
      heroicon = "chevron-right";
      break;

    default:
    // None.
  }

  return heroicon;
};

export default getIconOption;
