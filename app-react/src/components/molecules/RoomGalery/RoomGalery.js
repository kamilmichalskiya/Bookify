import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './RoomGalery.css';

const RoomGalery = ({ images, options, roomImageSwipeCallback }) => {
  const itemsConfig = [];
  images.forEach((image) => {
    itemsConfig.push({ original: image });
  });
  const properties = {
    showPlayButton: false,
    showFullscreenButton: false,
    showBullets: true,
    showThumbnails: false,
    items: itemsConfig,
    ...options,
    onSlide: roomImageSwipeCallback,
  };

  return <ImageGallery {...properties} />;
};

RoomGalery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default RoomGalery;
