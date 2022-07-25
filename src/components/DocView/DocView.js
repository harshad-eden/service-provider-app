import React from 'react';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const DocView = ({ docs }) => {
  console.log('docs--', docs);
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {docs.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', width: 70 }}>
          <HiOutlineDocumentText size={30} color="#f87d4e" />
          <p style={{ fontSize: 8, marginBottom: 0 }}>Request form</p>
        </div>
      ))}
      {docs.length > 1 ? (
        <Link
          style={{ fontSize: 10, fontWeight: 10, textDecoration: 'underline', color: '#f87d4e' }}
          to={'/'}
        >
          View all
        </Link>
      ) : (
        <Link
          style={{ fontSize: 10, fontWeight: 10, textDecoration: 'underline', color: '#f87d4e' }}
          to={'/'}
        >
          View
        </Link>
      )}
    </div>
  );
};

export default DocView;
