import React, { useState } from 'react';
import './GalleryView.css';
import gal1 from '../../assets/images/gal1.jpg';
import gal2 from '../../assets/images/gal2.jpg';
import gal3 from '../../assets/images/gal3.jpg';
import r4 from '../../assets/images/r4.jpg';
import gal5 from '../../assets/images/gal5.jpg';
import gal6 from '../../assets/images/gal6.jpg';
import r7 from '../../assets/images/r7.jpg';
import r2 from '../../assets/images/r2.jpg';
import r3 from '../../assets/images/r3.jpg';
import r5 from '../../assets/images/r5.jpg';
import r9 from '../../assets/images/r9.jpg';
import r8 from '../../assets/images/r8.jpg';
import r10 from '../../assets/images/r10.jpg';
import r11 from '../../assets/images/r11.jpg';
import r12 from '../../assets/images/r12.jpg';
import r13 from '../../assets/images/r13.jpg';
import g14 from '../../assets/images/g14.jpg';


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
        {[gal1, gal2, gal3, r4, gal5, gal6, r7,r2,r3,r5,r9,r8,r10,r11,r12,r13,g14].map((image, index) => (
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
