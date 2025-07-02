// src/components/InfoSection.js
import React from 'react';

export default function InfoSection({ content }) {
  return (
    <div className="content">
      {content.map((item, index) => {
        if (typeof item === 'string') {
          return <p key={index}>{item}</p>;
        }

        if (item.type === 'image') {
          return (
            <img
              key={index}
              src={item.src}
              alt={item.alt || 'Training Image'}
              style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
          );
        }

        if (item.type === 'video') {
          return (
            <video
              key={index}
              controls
              style={{ maxWidth: '100%', margin: '1rem 0', borderRadius: '10px' }}
            >
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          );
        }

        return null;
      })}
    </div>
  );
}
