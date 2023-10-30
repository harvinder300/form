// BackgroundImage.js

import React from 'react';

const BackgroundImage = ({ imageUrl, children, opacity }) => {
  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    width: '100%', // Set the width to 100%
    height: '100vh', // Set the height to 100% of the viewport height
     // Set the opacity; 1 is fully opaque
  };

  return (
    <div style={backgroundStyle}>
      {children}
    </div>
  );
};

export default BackgroundImage;
