import React from "react";
import "./Youtube.scss";

const Youtube = () => {
  return (
    <div className="youtube-container" data-testid="youtube-component">
      <h1>YOU&apos;LL LOVE WHY WE ARE DIFFERENT. TAKE A LOOK</h1>
      <hr className="hr-youtube" />
      <p>
        Toddler World is renowned for providing rich learning opportunities in
        unique and exciting environment.
      </p>

      <div className="youtube-video-container">
        <iframe
          title="Youtube Video"
          className="youtube-video"
          src="https://www.youtube.com/embed/FxxsA-qaHTM"
          data-testid="youtube-video"
        ></iframe>
      </div>
    </div>
  );
};

export default Youtube;
