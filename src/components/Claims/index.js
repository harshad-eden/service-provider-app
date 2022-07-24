import { useEffect, useState } from 'react';
import Main from '../../template';
import TopNav from '../../components/Common/TopNav';
import styles from './index.module.css';
import AntTable from './AntTable';
import { Pagination } from 'antd';
import RequestPreAuth from './RequestPreAuth';
import AddBox from '../../components/Common/AddBox';
import SearchAndFilter from '../../components/Common/SearchAndFilter';
import { useDispatch, useSelector } from 'react-redux';
import { getClaims } from '../../store/claimSlice';
import Loader from '../Common/Loader';

const Index = () => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { data } = useSelector((state) => state.claims);
  const [paginationNumb, setPaginationNumb] = useState();

  useEffect(() => {
    dispatch(getClaims());
  }, []);

  return (
    <Main>
      {!data ? (
        <Loader />
      ) : (
        <>
          <div style={{ marginTop: 20 }}>
            <SearchAndFilter />
            <AddBox value="New Claim" setIsModalVisible={setIsModalVisible} />
          </div>
          <div className="mtLarge">
            <div className="mlLarge">
              <TopNav options={['Pending Claims', 'Approved']} width={200} notification />
            </div>

            <div className={styles.table}>
              <AntTable />
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
