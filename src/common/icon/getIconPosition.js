/**
 * Retrieve group of classes for finetuning CTA icon position spacing
 *
 */

const getIconPosition = (icon, position) => {
  let classes = '';

  if (position === 'right') {
    switch (icon) {
      case 'more':
        classes = 'su-ml-5';
        break;

      case 'external':
        classes = 'su-ml-02em';
        break;

      case 'lock':
      case 'download':
      case 'upload':
        classes = 'su-ml-4';
        break;

      case 'play':
      case 'close':
        classes = 'su-ml-7';
        break;

      case 'podcast':
        classes = 'su-ml-4';
        break;

      case 'video':
        classes = 'su-ml-6';
        break;

      case 'email':
        classes = 'su-ml-7';
        break;

      case 'jump':
      case 'action':
      case 'info':
        classes = 'su-ml-4';
        break;

      default:
      // None.
    }
  }
  if (position === 'left') {
    switch (icon) {
      case 'more':
        classes = 'su-mr-5';
        break;

      case 'external':
        classes = 'su-mr-02em';
        break;

      case 'lock':
      case 'download':
      case 'upload':
        classes = 'su-mr-4';
        break;

      case 'play':
      case 'close':
        classes = 'su-mr-7';
        break;

      case 'podcast':
        classes = 'su-mr-4';
        break;

      case 'video':
        classes = 'su-mr-6';
        break;

      case 'email':
        classes = 'su-mr-7';
        break;

      case 'jump':
      case 'action':
      case 'info':
        classes = 'su-mr-4';
        break;

      default:
      // None.
    }
  }

  return classes;
};

export default getIconPosition;
