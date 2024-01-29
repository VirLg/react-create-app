import React from 'react';
import { PolicyLink } from './Policy.styled';

const Policy = () => {
  return (
    <div className="container">
      <ul style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
        <PolicyLink
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
          }}
        >
          Політика використання файлів cookie
        </PolicyLink>
        <PolicyLink
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
          }}
        >
          Умови користування
        </PolicyLink>
        <PolicyLink
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
          }}
        >
          Політика конфіденційності
        </PolicyLink>
      </ul>
    </div>
  );
};

export default Policy;
