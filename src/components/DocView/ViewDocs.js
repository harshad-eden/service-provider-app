import { Modal } from 'antd';
import CloseModalImg from '../../img/close-modal.png';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const RequestPreAuth = ({ isDocVisible, setIsDocVisible, docs }) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <>
      <Modal className="fileClaim" bodyStyle={{ padding: 50 }} footer={null} visible={isDocVisible}>
        <div
          onClick={() => setIsDocVisible(false)}
          style={{ cursor: 'pointer' }}
          className="modalCloseIcon"
        >
          <img src={CloseModalImg} style={{ width: 28 }} alt="" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 35 }}>
          <div>
            <h1 className="mbZero">View all documents</h1>
            <h5 className="mbZero">Please click on document to open</h5>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 30,
              flexWrap: 'wrap',
            }}
          >
            {docs.map((item, index) => (
              <div
                onClick={() => openInNewTab(item.url)}
                key={item}
                style={{ display: 'flex', alignItems: 'center', width: 70, cursor: 'pointer' }}
              >
                <HiOutlineDocumentText size={40} color="#f87d4e" />
                <p style={{ fontSize: 8, marginBottom: 0 }}>Document</p>
                {/* <p style={{ fontSize: 8, marginBottom: 0 }}>{item.original_file_name}</p> */}
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RequestPreAuth;
