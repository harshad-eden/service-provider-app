import { useEffect, useState } from 'react';
import ColumnItem from './ColumnItem';
import group from '../../img/group.png';
import claim from '../../img/claim.png';
import pdf from '../../img/pdf.png';
import excel from '../../img/excel.png';
import finger from '../../img/fingerprintBlue.png';
import GenerateReport from './GenerateModal';
import Main from '../../template';
import styles from './index.module.css';
import SearchAndFilter from '../../components/Common/SearchAndFilter';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Common/Loader';

import ClaimTable from './Claims';
import PreAuth from './PreAuth';
import Payment from './Payment';
import { getStats } from '../../store/reportSlice';

const Index = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { stats, loading, content, statsLoading } = useSelector((state) => state.reports);

  const renderTable = () => {
    if (title === 'Pending claims') {
      return <ClaimTable />;
    }
    if (title === 'Approved claims') {
      return <ClaimTable />;
    }
    if (title === 'Pre-auths') {
      return <PreAuth />;
    }
    if (title === 'Payments') {
      return <Payment />;
    }
  };

  useEffect(() => {
    dispatch(getStats());
  }, []);

  let data = [
    {
      img: claim,
      color: '#3ab44d',
      title: 'Pending claims',
      count: stats?.claim_stats.num_of_total_claims,
      status: ['Received', 'Processing', 'Approved', 'Settled', 'Declined'],
    },
    {
      img: claim,
      color: '#3ab44d',
      title: 'Approved claims',
      count: stats?.claim_stats.num_of_approved_claims,
      status: ['Received', 'Processing', 'Approved', 'Settled', 'Declined'],
    },
    {
      img: group,
      color: '#f87d4e',
      title: 'Payments',
      count: stats?.payment_stats?.num_of_payments_processed,
      status: ['Declined', 'Transferred', 'Processed', 'Initiated'],
    },
    {
      img: finger,
      color: '#8e3ab4',
      title: 'Pre-auths',
      count: stats?.pre_auth_stats?.num_of_total_pre_auths,
      status: ['Received', 'Processing', 'Approved', 'Declined'],
    },
  ];

  return (
    <Main>
      {statsLoading ? (
        <Loader />
      ) : (
        <>
          <div style={{ marginTop: 20 }}>
            <SearchAndFilter />
          </div>
          <div style={{ marginTop: 30, width: '100%' }}>
            <p style={{ fontWeight: 500 }}>Summary</p>
            <div
              style={{
                display: 'flex',
                gap: 20,
                alignItems: 'center',
                width: '100%',
              }}
            >
              <ColumnItem setTitle={setTitle} setIsModalVisible={setIsModalVisible} data={data} />
            </div>
          </div>

          <GenerateReport
            loading={loading}
            title={title}
            status={data.find((item) => item.title === title)?.status}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />

          {content.length > 0 && (
            <>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: 30,
                  alignItems: 'center',
                }}
              >
                <h4 style={{ fontSize: 13, marginRight: 20 }} className="mbZero">
                  Downloaded as
                </h4>
                <img src={excel} style={{ height: 20, marginRight: 8, cursor: 'pointer' }} alt="" />
                <img src={pdf} style={{ height: 20, cursor: 'pointer' }} alt="" />
              </div>
              {renderTable()}
            </>
          )}
        </>
      )}
    </Main>
  );
};

export default Index;
