import { Button, Modal } from 'antd';
import styles from '../index.module.css';
import CheckerImg from '../../../img/checked.png';
import filedImg from '../../../img/failed.png';

const CommonModal = ({ isModalVisible }) => {
  let success = true;
  return (
    <Modal
      className="commonModal"
      bodyStyle={{ padding: 50 }}
      footer={null}
      visible={isModalVisible}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
        <div>
          {success ? (
            <img src={CheckerImg} style={{ height: 120 }} alt="" />
          ) : (
            <img src={filedImg} style={{ height: 120 }} alt="" />
          )}
        </div>

        <div>
          <h1 style={{ fontWeight: 'bold' }}>Successfull</h1>
          <p style={{ fontWeight: 300 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys.
          </p>
        </div>
        {success ? (
          <Button size="large" shape="round" style={{ width: '60%' }} type="primary">
            Proceed
          </Button>
        ) : (
          <Button
            size="large"
            shape="round"
            style={{ width: '60%', backgroundColor: '#980c31', color: 'white' }}
          >
            Proceed
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default CommonModal;
