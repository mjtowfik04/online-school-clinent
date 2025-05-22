import React from "react";

const ProductMediaGallery = ({ media = [], productName }) => {
  return (
    <div className="space-y-4">
      {media.map((item, index) => {
        const isVideo = item.type === "video" || item.url.match(/\.(mp4|webm|ogg)$/);
        return (
          <div key={index} className="rounded-lg overflow-hidden">
            {isVideo ? (
              <video
                controls
                className="w-full aspect-video rounded-lg"
              >
                <source src={item.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={item.url}
                alt={`${productName} ${index + 1}`}
                className="w-full aspect-square object-cover rounded-lg"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductMediaGallery;
