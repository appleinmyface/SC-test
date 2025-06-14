import React from 'react';
import { Button } from 'react-bootstrap';
import { TestContext } from '../context/TestContext';

export default function InfoSection({ content }) {
  const { nextStep } = React.useContext(TestContext);

  return (
    <div className="content">
      {content.map((item, i) => {
        if (typeof item === 'string') {
          return <p key={i}>{item}</p>;
        }
        if (item && item.type === 'image') {
          return <img key={i} src={item.src} alt={item.alt || 'image'} style={{ maxWidth: '100%' }} />;
        }
        // fallback: don't render or you could log error or warning here
        return null;
      })}
      <Button className="button-sc mt-3" onClick={nextStep}>
        Continue
      </Button>
    </div>
  );
}
