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
  const [paginationNumb, setPaginationNumb] = useState();

  useEffect(() => {
    dispatch(getPreAuths());
  }, []);

  const handlePaginationChange = (e) => {
    console.log(e);
  };

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
              <AntTable data={content} />
            </div>
            <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center' }}>
              <Pagination onChange={handlePaginationChange} size="small" total={30} />
            </div>
          </div>
          <RequestPreAuth isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
        </>
      )}
    </Main>
  );
};

export default Index;
