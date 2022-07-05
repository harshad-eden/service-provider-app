import { Modal } from 'antd';
import styles from './index.module.css';
import CloseModalImg from '../../img/close-modal.png';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const RequestPreAuth = ({ isDocVisible, setIsDocVisible }) => {
  let arr = [1, 2, 3, 4, 5, 6];

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
            onClick={() => setIsDocVisible(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 30,
              flexWrap: 'wrap',
            }}
          >
            {arr.map((item) => (
              <div
                onClick={() => openInNewTab(`http://localhost:3000/view/${item}`)}
                key={item}
                style={{ display: 'flex', alignItems: 'center', width: 70, cursor: 'pointer' }}
              >
                <HiOutlineDocumentText size={40} color="#f87d4e" />
                <p style={{ fontSize: 8, marginBottom: 0 }}>Request form</p>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RequestPreAuth;
