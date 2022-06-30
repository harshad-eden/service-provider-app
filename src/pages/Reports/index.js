import { useState } from 'react';
import Main from '../../components/Layout';
import styles from './index.module.css';
import { Input, Pagination } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import ColumnItem from './ColumnItem';
import patient from '../../img/patient.png';
import group from '../../img/group.png';
import claim from '../../img/claim.png';
import pdf from '../../img/pdf.png';
import excel from '../../img/excel.png';
import finger from '../../img/fingerprintBlue.png';
import GenerateReport from './GenerateModal';
import AntTable from './AntTable';

let imgs = [
  { img: patient, color: '#f87d4e', title: 'Patients', count: '4,500' },
  { img: claim, color: '#3ab44d', title: 'Pending claims', count: '14' },
  { img: group, color: '#8e3ab4', title: 'Pre-auths', count: '27' },
  { img: finger, color: '#3a98b4', title: 'Employees', count: '20,000' },
];

const Index = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <Main>
      <div style={{ marginTop: 20 }}>
        <div style={{ width: '30%', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Input
            size="large"
            style={{ border: 'none', borderRadius: 20 }}
            prefix={<SearchOutlined className={styles.searchIcon} />}
          />
          <img src="/icons/filter.png" alt="" style={{ height: 35 }} />
        </div>
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
          <ColumnItem setIsModalVisible={setIsModalVisible} imgs={imgs} />
        </div>
      </div>

      <GenerateReport isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />

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
        <img src={excel} style={{ height: 20, marginRight: 8 }} alt="" />
        <img src={pdf} style={{ height: 20 }} alt="" />
      </div>

      <div className={styles.table}>
        <AntTable />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <Pagination size="small" total={50} />
      </div>
    </Main>
  );
};

export default Index;
