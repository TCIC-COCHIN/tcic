import React from "react";
import { Link } from "react-router-dom";
import JSZip from "jszip"; // For creating ZIP files
import { saveAs } from "file-saver"; // For saving the ZIP file
import "./SelfBranding.css";
import image1 from "../../assets/images/self1.jpg";
import image2 from "../../assets/images/self2.jpg";
import image3 from "../../assets/images/self3.jpg";

const SelfBranding = () => {
  // Function to download all images as a ZIP file
  const handleDownloadAll = () => {
    const zip = new JSZip();
    const folder = zip.folder("SelfBrandingImages");

    folder.file("selfbranding1.png", fetch(image1).then(res => res.blob()));
    folder.file("selfbranding2.png", fetch(image2).then(res => res.blob()));
    folder.file("selfbranding3.png", fetch(image3).then(res => res.blob()));

    // Generate and save ZIP
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "SelfBrandingImages.zip");
    });
  };

  return (
    <div className="self-branding-page">
      {/* Image Section */}
      <div className="image-row">
        <div className="poster-container">
          <img src={image1} alt="Self Branding 1" className="poster" />
        </div>
        <div className="poster-container">
          <img src={image2} alt="Self Branding 2" className="poster" />
        </div>
        <div className="poster-container">
          <img src={image3} alt="Self Branding 3" className="poster" />
        </div>
      </div>

      {/* Button Section */}
      <div className="button-container">
        <Link to="/contact" className="contact-button">
          Contact Us
        </Link>
        <button className="download-button" onClick={handleDownloadAll}>
          Download All Images
        </button>
      </div>
    </div>
  );
};

export default SelfBranding;
