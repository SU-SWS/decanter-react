import clsxd from 'clsx-dedupe';

/**
 * Retrieve group of classes needed for requested type of CTA icon animation
 *
 */

const getIconAnimation = (animate) => {
  let classes = '';

  if (animate !== 'none') {
    classes = 'su-transition-transform group-hocus:su-transform';
  }

// Add specific classes for each type of animation
  switch (animate) {
    case 'right':
      classes = clsxd(classes, 'group-hocus:su-translate-x-02em');
      break;

    case 'top-right':
      classes = clsxd(classes, 'group-hocus:su-translate-x-01em group-hocus:su--translate-y-01em');
      break;

    case 'down':
      classes = clsxd(classes, 'group-hocus:su-translate-y-02em');
      break;
  }

  return classes;
};

export default getIconAnimation;
