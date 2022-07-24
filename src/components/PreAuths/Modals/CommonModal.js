import { Button, Modal } from 'antd';
import styles from '../index.module.css';
import CheckerImg from '../../../img/checked.png';
import filedImg from '../../../img/failed.png';

const CommonModal = ({ isModalVisible, setIsModalVisible, status }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
      <div>
        {status ? (
          <img src={CheckerImg} style={{ height: 120 }} alt="" />
        ) : (
          <img src={filedImg} style={{ height: 120 }} alt="" />
        )}
      </div>

      <div>
        <h1 style={{ fontWeight: 'bold' }}>{status ? 'Successfull' : 'Failed'} </h1>
        <p style={{ fontWeight: 300 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys.
        </p>
      </div>
      {status ? (
        <Button
          onClick={() => setIsModalVisible(false)}
          size="large"
          shape="round"
          style={{ width: '60%' }}
          type="primary"
        >
          Proceed
        </Button>
      ) : (
        <Button
          onClick={() => setIsModalVisible(false)}
          size="large"
          shape="round"
          style={{ width: '60%', backgroundColor: '#980c31', color: 'white' }}
        >
          Proceed
        </Button>
      )}
    </div>
  );
};

export default CommonModal;
