import { Button } from 'antd';
import CheckerImg from '../../../img/checked.png';
import filedImg from '../../../img/failed.png';
import { useDispatch } from 'react-redux';
import { resetRequest } from '../../../store/preAuthSlice';

const CommonModal = ({ setIsModalVisible, status }) => {
  const dipatch = useDispatch();

  const handleReqReset = () => {
    dipatch(resetRequest());
    setIsModalVisible(false);
  };

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
          {status
            ? `The pre-auth/claim/in-patient request has been submitted for Eden Care to review. You can
          check the status real-time.`
            : ' The pre-auth/claim/in-patient request cannot be submitted now. Please try again?'}
        </p>
      </div>
      {status ? (
        <Button
          onClick={() => handleReqReset()}
          size="large"
          shape="round"
          style={{ width: '60%' }}
          type="primary"
        >
          Proceed
        </Button>
      ) : (
        <Button
          onClick={() => handleReqReset()}
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
