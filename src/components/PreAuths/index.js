import { useEffect, useState } from 'react';
import Main from '../../template';
import TopNav from '../../components/Common/TopNav';
import styles from './index.module.css';
import AntTable from './AntTable';
import AddBox from '../../components/Common/AddBox';
import { Pagination } from 'antd';
import SearchAndFilter from '../../components/Common/SearchAndFilter';
import { getPreAuths } from '../../store/preAuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Common/Loader';
import RequestPreAuth from './RequestPreAuth';

const Index = () => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { data, content } = useSelector((state) => state.preAuth);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (data === null) {
      dispatch(getPreAuths({ page, size: 6 }));
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
            <AddBox value="New Pre-Auth" setIsModalVisible={setIsModalVisible} />
          </div>
          <div className="mtLarge">
            <div className="mlLarge">
              <TopNav
                options={['Pending Pre-Auths', 'Approved', 'Declined']}
                width={300}
                notification
              />
            </div>
            <div className={styles.table}>
              <AntTable data={content.slice(0, 6)} />
            </div>
            <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center' }}>
              <Pagination onChange={(e) => setPage(e - 1)} size="small" total={40} />
            </div>
          </div>
          <RequestPreAuth isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
        </>
      )}
    </Main>
  );
};

export default Index;
