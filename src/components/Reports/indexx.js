import { useState } from 'react';
import { Pagination, Spin } from 'antd';
import AntTable from './AntTable';
import ColumnItem from './ColumnItem';
import patient from '../../img/patient.png';
import group from '../../img/group.png';
import claim from '../../img/claim.png';
import pdf from '../../img/pdf.png';
import excel from '../../img/excel.png';
import finger from '../../img/fingerprintBlue.png';
import GenerateReport from './GenerateModal';
import Main from '../../template';
import styles from './index.module.css';
import SearchAndFilter from '../../components/Common/SearchAndFilter';
import { useSelector } from 'react-redux';
import Loader from '../Common/Loader';

const Index = () => {
  const [title, setTitle] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const state = useSelector((state) => state.reports);

  console.log(state);

  return (
    <Main>
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
          loading={state.loading}
          title={title}
          status={data.find((item) => item.title === title)?.status}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />

        {state.content.length > 0 && (
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
            <div className={styles.table}>
              <AntTable data={state.content} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
              <Pagination size="small" total={50} />
            </div>
          </>
        )}
      </>
    </Main>
  );
};

export default Index;

let data = [
  {
    img: claim,
    color: '#3ab44d',
    title: 'Pending claims',
    count: '14',
    status: ['Received', 'Processing', 'Approved', 'Settled', 'Declined'],
  },
  {
    img: patient,
    color: '#f87d4e',
    title: 'Payments',
    count: '4,500',
    status: ['Declined', 'Transferred', 'Processed', 'Initiated'],
  },
  {
    img: group,
    color: '#8e3ab4',
    title: 'Pre-auths',
    count: '27',
    status: ['Received', 'Processing', 'Approved', 'Declined'],
  },
  {
    img: finger,
    color: '#3a98b4',
    title: 'Employees',
    count: '20,000',
    status: ['Declined', 'Transferred', 'Processed', 'Initiated'],
  },
];
