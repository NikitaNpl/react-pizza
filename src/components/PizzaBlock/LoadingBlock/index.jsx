import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="136" cy="130" r="130" />
      <rect x="2" y="283" rx="6" ry="6" width="280" height="20" />
      <rect x="1" y="319" rx="6" ry="6" width="280" height="73" />
      <rect x="0" y="421" rx="0" ry="0" width="105" height="29" />
      <rect x="137" y="411" rx="6" ry="6" width="136" height="47" />
    </ContentLoader>
  );
}

export default LoadingBlock;
