import Main from '../../template';
import { Link, useParams } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { Button, Divider, Upload } from 'antd';
import shareIcon from '../../img/share.png';

import AntTable from './AntTable';
import styles from './index.module.css';
import messageIcon from '../../img/message.png';
import filterGreen from '../../img/filterGreen.png';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import RoundArrow from '../Common/RoundArrow';

// import styles from './styles.module.css';

const Index = () => {
  const { content } = useSelector((state) => state.claims);
  const { id } = useParams();

  let state = content?.find((item) => item.id === id);

  console.log('whoooo', state);

  return (
    <Main>
      <div>
        <Link
          to="/inpatients"
          style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}
        >
          <HiOutlineArrowLeft size={30} />
          <h3 style={{ marginBottom: 0, fontWeight: 700 }}>Inpatient Profile</h3>
        </Link>

        <div style={{ display: 'flex', gap: 20 }}>
          <section style={{ width: '35%' }}>
            <p style={{ marginBottom: 5, color: '#3ab44d', fontWeight: 700 }}>Profile</p>
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                borderRadius: 15,
                padding: 30,
                gap: 20,
              }}
            >
              <img
                style={{ width: 100, height: 100, borderRadius: '50%', marginRight: 40 }}
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />

              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <div>
                  <p style={{ fontWeight: 700, color: '#3ab44d' }} className="mbZero">
                    Employee
                  </p>
                  <p style={{ fontWeight: 700, fontSize: 22 }} className="mbZero">
                    {state.member.name}
                  </p>
                  <p className="mbZero">{state?.member_card_number}</p>
                </div>

                <div style={{ display: 'flex', gap: 13 }}>
                  <img style={{ height: 22 }} src={messageIcon} alt="" />
                  <img style={{ height: 22 }} src={shareIcon} alt="" />
                </div>
              </div>

              <Divider />

              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <div>
                  <p style={{ fontWeight: 700 }} className="mbZero">
                    Location
                  </p>
                  <p style={{ fontWeight: 800, fontSize: 18, color: '#3ab44d' }}>Kigali Hospital</p>
                </div>

                <div>
                  <p style={{ fontWeight: 700 }} className="mbZero">
                    Insurance Type
                  </p>
                  <p style={{ fontWeight: 800, fontSize: 18, color: '#3ab44d' }}>
                    {state?.member.insurance_type}
                  </p>
                </div>
              </div>
              <Divider />
              <Upload accept=".jpg,.jpeg,.png" beforeUpload={() => false}>
                <Button
                  shape="round"
                  style={{
                    backgroundColor: '#3ab44d',
                    color: 'white',
                  }}
                  type="text"
                >
                  Upload Doc
                </Button>
              </Upload>
            </div>
          </section>
          <section style={{ width: '60%' }}>
            <p style={{ marginBottom: 5, color: '#3ab44d', fontWeight: 700 }}>Statement</p>
            <div className={styles.table}>
              <div
                style={{
                  width: '55%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: 10,
                  marginTop: 20,
                }}
              >
                <Input
                  className="inpatientDetail"
                  style={{ border: 'none', borderRadius: 20, backgroundColor: '#f8f8f8' }}
                  prefix={<SearchOutlined className={styles.searchIcon} />}
                />
                <img src={filterGreen} alt="" style={{ height: 35 }} />
              </div>
              <p
                style={{
                  color: '#707070',
                  width: '90%',
                  fontSize: 14,
                  padding: 10,
                  marginBottom: 0,
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <AntTable />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginRight: 20,
                  marginTop: 10,
                }}
              >
                <RoundArrow text="View details" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </Main>
  );
};

export default Index;
