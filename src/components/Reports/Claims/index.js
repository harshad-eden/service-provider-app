import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pendingClaimsReport } from '../../../store/reportSlice';

import AntTable from './AntTable';

const index = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const { content } = useSelector((state) => state.reports);

  const handlePageChange = (e) => {
    setPage(e);
    dispatch(pendingClaimsReport({ page, size: 5 }));
  };

  return (
    <>
      <div style={{ marginTop: 10 }}>
        <AntTable data={content} />
      </div>
      <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center' }}>
        <Pagination onChange={(e) => handlePageChange(e)} size="small" total={40} />
      </div>
    </>
  );
};

export default index;
