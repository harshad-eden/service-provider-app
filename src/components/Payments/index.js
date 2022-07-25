import { useEffect, useState } from 'react';
import styles from './index.module.css';
import AntTable from './AntTable';
import { Pagination } from 'antd';
import RequestPreAuth from './Modal';
import Main from '../../template';
import TopNav from '../../components/Common/TopNav';
import AddBox from '../../components/Common/AddBox';
import SearchAndFilter from '../../components/Common/SearchAndFilter';
import { getAllPayments } from '../../store/paymentSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Common/Loader';

const Index = () => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { data, content } = useSelector((state) => state.payment);

  useEffect(() => {
    dispatch(getAllPayments());
  }, []);

  return (
    <Main>
      {!data ? (
        <Loader />
      ) : (
        <>
          <div style={{ marginTop: 20 }}>
            <SearchAndFilter />
          </div>
          <div className="mtLarge">
            <div className="mlLarge">
              <TopNav options={['Pending Payments', 'Paid Payments']} width={250} notification />
            </div>

            <div className={styles.table}>
              <AntTable data={content} />
            </div>
            <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center' }}>
              <Pagination size="small" total={50} />
            </div>
          </div>
          <RequestPreAuth isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
        </>
      )}
    </Main>
  );
};

export default Index;
