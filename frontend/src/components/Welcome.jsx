import React from 'react';
import image from '../assets/images.jpg';

function Welcome() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          height: '100vh',
        }}
      >
        <div>
          <p>Login</p>
        </div>
        <h1>Welcome</h1>
      </div>
    </div>
  );
}

export default Welcome;
