import React, { useState } from 'react';
import './GalleryView.css';
import gal1 from '../../assets/images/gal1.jpg';
import gal2 from '../../assets/images/gal2.jpg';
import gal3 from '../../assets/images/gal3.jpg';
import gal4 from '../../assets/images/gal4.jpg';
import gal5 from '../../assets/images/gal5.jpg';
import gal6 from '../../assets/images/gal6.jpg';
import gal7 from '../../assets/images/gal7.jpg';

const GalleryView = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      <div className="galleryview">
        {[gal1, gal2, gal3, gal4, gal5, gal6, gal7].map((image, index) => (
          <div className="box" key={index} onClick={() => openModal(image)}>
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage} alt="Full-size view" />
        </div>
      )}
    </div>
  );
};

export default GalleryView;
