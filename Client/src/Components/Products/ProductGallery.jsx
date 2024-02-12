import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from "../../Assets/mobile.png";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

const ProductGallery = ({ id }) => {
  const images = [
    {
      original: `${mobile}`,
    },
    {
      original: `${mobile}`,
    },
    {
      original: `${mobile}`,
    },
  ];
  return (
    <div
      className="product-gallary-card d-flex justfiy-content-center  align-items-center
    pt-2"
    >
      <ImageGallery
        items={images}
        defaultImage={mobile}
        showFullscreenButton={false}
        isRTL={true}
        showPlayButton={false}
        renderLeftNav={LeftButton}
        renderRightNav={RightButton}
      />
    </div>
  );
};

export default ProductGallery;
