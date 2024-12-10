import React, { useState } from 'react';
import './News.css';
import gal1 from '../../assets/images/n1.jpg';
import gal2 from '../../assets/images/n2.jpg';
import gal3 from '../../assets/images/n3.jpg';
import r4 from '../../assets/images/n4.jpg';
import gal5 from '../../assets/images/n5.jpg';
import gal6 from '../../assets/images/n6.jpg';
import r7 from '../../assets/images/n8.jpg';
import r2 from '../../assets/images/n9.jpg';
import r3 from '../../assets/images/n10.jpg';
import r5 from '../../assets/images/n11.jpg';
import r9 from '../../assets/images/n13.jpg';
import r8 from '../../assets/images/n14.jpg';
import r10 from '../../assets/images/n15.jpg';
import r11 from '../../assets/images/n16.jpg';
import r12 from '../../assets/images/n17.jpg';
import r13 from '../../assets/images/n18.jpg';
import digis from '../../assets/images/digis.jpg';
import schoolcare1 from '../../assets/images/schoolposter1.jpg';
import schoolcare2 from '../../assets/images/schoolposter2.jpg';
import schoolcare3 from '../../assets/images/schoolcare3.png';
import schoolcare4 from '../../assets/images/schoolcare4.png';
import mod1 from '../../assets/images/mod1.jpg';
import mod2 from '../../assets/images/mod2.png';



const News = () => {
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
        {[gal1, gal2, gal3, r4, gal5, gal6, r7,r2,r3,r5,r9,r8,r10,r11,r12,r13,digis,schoolcare1,schoolcare2,schoolcare3,schoolcare4,mod1,mod2].map((image, index) => (
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

export default News;
