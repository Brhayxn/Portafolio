import React, { useState } from 'react';
import Portfolio from './Portafolio';

const SombraEnCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Sombra que sigue el cursor */}
      <div
        style={{
          position: 'absolute',
          top: pos.y - 100,
          left: pos.x - 100,
          width: 200,
          height: 200,
          pointerEvents: 'none',
          borderRadius: '50%',
          boxShadow: '0 0 60px 30px rgba(0,0,0,0.25)',
          transition: 'top 0.02s, left 0.02s',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        <Portfolio/>
      </div>
    </div>
  );
};

export default SombraEnCursor;
