/**
 * Retrieve group of classes for finetuning CTA icon size and position
 *
 */

const getIconClasses = (icon) => {
  let classes = '';

  switch (icon) {
    case 'more':
      classes = 'su-h-09em su-w-09em su-ml-5 su--mt-2';
      break;

    case 'external':
      classes = 'su-w-08em su-ml-02em su--rotate-45 group-hocus:su--rotate-45';
      break;

    case 'lock':
      classes = 'su-h-08em su-w-08em su-ml-4 su--mt-3';
      break;

    case 'download':
      classes = 'su-h-08em su-w-08em su-ml-4 su--mt-3';
      break;

    case 'play':
      classes = 'su-w-08em su-ml-7 su--mt-3';
      break;

    case 'podcast':
      classes = 'su-w-08em su-mt-[-0.25em] su-ml-4';
      break;

    case 'video':
      classes = 'su-h-08em su-w-08em su-ml-6 su--mt-3';
      break;

    case 'email':
      classes = 'su-h-08em su-w-08em su-ml-7 su--mt-2';
      break;

    case 'jump':
      classes = 'su-h-1em su-w-1em su-ml-4 su--mt-2';
      break;

    case 'action':
      classes = 'su-h-1em su-w-1em su-ml-4 su--mt-2';
      break;

    case 'info':
      classes = 'su-h-1em su-w-1em su-ml-4 su--mt-2';
      break;

    default:
    // None.
  }

  return classes;
};

export default getIconClasses;
