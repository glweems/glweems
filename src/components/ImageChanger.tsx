import React, { useState } from 'react';
import { Image } from '../utils/theme';

const ImageChanger = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextIndex = currentIndex >= images.length - 1 ? 0 : currentIndex + 1;
  const changeImage = () => setCurrentIndex(nextIndex);

  return (
    <Image
      className="Image"
      onMouseEnter={changeImage}
      onMouseLeave={changeImage}
      {...images[currentIndex].childImageSharp}
    />
  );
};

export default ImageChanger;
