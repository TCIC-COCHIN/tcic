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
import pic1 from '../../assets/images/pic1.jpg';
import pic2 from '../../assets/images/pic2.jpg';
import pic3 from '../../assets/images/pic3.jpg';
import pic4 from '../../assets/images/pic4.jpg';
import pic5 from '../../assets/images/pic5.jpg';
import pic6 from '../../assets/images/pic6.jpg';
import pic7 from '../../assets/images/pic7.jpg';
import pic8 from '../../assets/images/pic8.jpg';
import pic20 from '../../assets/images/pic20.jpg';
import pic10 from '../../assets/images/pic10.jpg';
import pic11 from '../../assets/images/pic11.jpg';
import pic12 from '../../assets/images/pic12.jpg';
import pic13 from '../../assets/images/pic13.jpg';
import pic21 from '../../assets/images/pic21.jpg';
import pic15 from '../../assets/images/pic15.jpg';
import pic16 from '../../assets/images/pic16.jpg';
import pic17 from '../../assets/images/pic17.jpg';
import pic22 from '../../assets/images/pic22.jpg';
import pic23 from '../../assets/images/pic23.jpg';
import pic24 from '../../assets/images/pic24.jpg';


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
        {[gal1, gal2, gal3, r4, gal5, gal6, r7,r2,r3,r5,r9,r8,r10,r11,r12,r13,g14,pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic10,pic11,pic12,pic13,pic15,pic16,pic17,pic20,pic21,pic22,pic23,pic24].map((image, index) => (
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
