import React from 'react';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const DocView = ({ docs, setIsDocVisible, setDoocs }) => {
  const handleViewAll = () => {
    setDoocs(docs);
    setIsDocVisible(true);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', width: 70 }}>
        <HiOutlineDocumentText size={30} color="#f87d4e" />
        <p style={{ fontSize: 8, marginBottom: 0 }}>Request form</p>
      </div>

      <div
        style={{ fontSize: 10, fontWeight: 10, textDecoration: 'underline', color: '#f87d4e' }}
        onClick={() => handleViewAll()}
      >
        View
      </div>
    </div>
  );
};

export default DocView;
