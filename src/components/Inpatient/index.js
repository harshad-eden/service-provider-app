import { useEffect, useState } from 'react';
import Main from '../../template';
import TopNav from '../../components/Common/TopNav';
import styles from './index.module.css';
import AntTable from './AntTable';
import AddBox from '../../components/Common/AddBox';
import { Pagination } from 'antd';
import RequestPreAuth from './FileClaim';
import SearchAndFilter from '../../components/Common/SearchAndFilter';
import Loader from '../Common/Loader';
import ViewDocs from './ViewDocs';
import { useDispatch, useSelector } from 'react-redux';
import { getClaims } from '../../store/claimSlice';

const Index = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { data, content } = useSelector((state) => state.claims);

  useEffect(() => {
    if (data === null) {
      dispatch(getClaims({ page, size: 6 }));
    }
  }, [page, data]);

  return (
    <Main>
      {!data ? (
        <Loader />
      ) : (
        <>
          <div style={{ marginTop: 20 }}>
            <SearchAndFilter />
            <AddBox value="Add Inpatient" setIsModalVisible={setIsModalVisible} />
          </div>
          <div className="mtLarge">
            <div className="mlLarge">
              <TopNav options={['Pending Claims', 'Approved']} width={200} notification />
            </div>
            <div className={styles.table}>
              <AntTable data={content.slice(0, 6)} />
            </div>
            <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center' }}>
              <Pagination onChange={(e) => setPage(e - 1)} size="small" total={50} />
            </div>
          </div>

          <RequestPreAuth isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
        </>
      )}
    </Main>
  );
};

export default Index;
