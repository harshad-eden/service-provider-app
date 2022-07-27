import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import TabMenu from '../Common/TopNavDashboard';
import BottomSection from './BottomSection';

import PreAuthsTable from '../PreAuths/AntTable';
import ClaimTable from '../Claims/AntTable';
import PaymentsTable from '../Payments/AntTable';
import { getPreAuths } from '../../store/preAuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getClaims } from '../../store/claimSlice';
import { getAllPayments } from '../../store/paymentSlice';

const TopSection = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState('Authorizations');

  const { preAuth } = useSelector((state) => state);
  const { claims } = useSelector((state) => state);
  const { payment } = useSelector((state) => state);

  useEffect(() => {
    if (tab === 'Authorizations' && preAuth.content.length < 1) {
      dispatch(getPreAuths({ page: 0, size: 6 }));
    }
    if (tab === 'Claims' && claims.content.length < 1) {
      dispatch(getClaims({ page: 0, size: 6 }));
    }
    if (tab === 'Payments' && payment.content.length < 1) {
      dispatch(getAllPayments({ page: 0, size: 6 }));
    }
  }, [tab, preAuth]);

  const renderTable = () => {
    if (tab === 'Authorizations') {
      return <PreAuthsTable data={preAuth.content} dashboard={true} />;
    }
    if (tab === 'Claims') {
      return <ClaimTable data={claims.content} dashboard={true} />;
    }
    if (tab === 'Payments') {
      return <PaymentsTable data={payment.content} dashboard={true} />;
    }
  };

  return (
    <div
      style={{
        width: '70%',
      }}
    >
      <div className={styles.table}>
        <TabMenu
          tab={tab}
          setTab={setTab}
          options={['Authorizations', 'Payments', 'Claims']}
          width={280}
          marginBottom={15}
        />
        {renderTable()}
      </div>
      <BottomSection />
    </div>
  );
};

export default TopSection;
