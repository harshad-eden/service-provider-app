import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import pdf from './sample.pdf';
import { Button } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const DocView = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }

  return (
    <div style={{ width: '60%', margin: 'auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Button
          onClick={changePageBack}
          disabled={pageNumber < 2 ? true : false}
          shape="circle"
          icon={<ArrowLeftOutlined />}
          size="large"
        />
        <div>
          {/* <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document> */}
          <p style={{ textAlign: 'center' }}>
            Page {pageNumber} of {numPages}
          </p>
        </div>

        <Button
          onClick={changePageNext}
          disabled={pageNumber < numPages ? false : true}
          shape="circle"
          icon={<ArrowRightOutlined />}
          size="large"
        />

        {/* {pageNumber < numPages && <button onClick={changePageNext}>Next Page</button>} */}
      </div>
    </div>
  );
};

export default DocView;
