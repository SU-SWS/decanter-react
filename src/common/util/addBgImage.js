// import transformImage from "./transformImage";
import getImageWidth from "./getImageWidth";

const addBgImage = (
  imageUrl,
  gradientOverlay = "linear-gradient(to bottom, transparent, #181D1C)"
) => {
  let bgImage = {};
  let imgSrc = "";

  // Process image and set inline background image if image exists
  if (imageUrl != null) {
    if (imageUrl.startsWith("http")) {
      const originalWidth = getImageWidth(imageUrl);

      // Downsize image if it's wider than 2000px, otherwise just reduce jpg quality to 60%
      if (originalWidth > 2000) {
        imgSrc = imageUrl.concat("/2000x0");
      } else {
        imgSrc = imageUrl;
      }

      // Set background image style
      bgImage = {
        backgroundImage: `${gradientOverlay}, url('${imgSrc}')`,
      };
    }
  }

  return bgImage;
};

export default addBgImage;
