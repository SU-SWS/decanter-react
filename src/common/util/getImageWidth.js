// Find the width of the image uploaded to Storyblok

const getImageWidth = (imageUrl) => {
  let originalWidth = 0;

  if (imageUrl.startsWith("http")) {
    // Get image width from URL of storyblok image
    // eslint-disable-next-line prefer-destructuring
    originalWidth = imageUrl.split("/")[5].split("x")[0];
  }

  return originalWidth;
};

export default getImageWidth;
