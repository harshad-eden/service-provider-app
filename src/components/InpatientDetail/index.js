import Main from '../../template';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { Button, Divider } from 'antd';
import shareIcon from '../../img/share.png';
import messageIcon from '../../img/message.png';
import AntTable from './AntTable';
import styles from './index.module.css';

// import styles from './styles.module.css';

const Index = () => {
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
            <p style={{ marginBottom: 5, color: '#f87d4e', fontWeight: 700 }}>Profile</p>
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
                  <p style={{ fontWeight: 700, color: '#f87d4e' }} className="mbZero">
                    Employee
                  </p>
                  <p style={{ fontWeight: 700, fontSize: 22 }} className="mbZero">
                    Kipagat George
                  </p>
                  <p className="mbZero">#000000000</p>
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
                  <p style={{ fontWeight: 800, fontSize: 18, color: '#f87d4e' }}>Kigali Hospital</p>
                </div>

                <div>
                  <p style={{ fontWeight: 700 }} className="mbZero">
                    Insurance Type
                  </p>
                  <p style={{ fontWeight: 800, fontSize: 18, color: '#f87d4e' }}>Bronze</p>
                </div>
              </div>
              <Divider />
              <Button style={{ width: '50%' }} size="large" shape="round" type="primary">
                Upload Doc
              </Button>
            </div>
          </section>
          <section style={{ width: '60%' }}>
            <p style={{ marginBottom: 5, color: '#f87d4e', fontWeight: 700 }}>Statement</p>
            <div className={styles.table}>
              <AntTable />
            </div>
          </section>
        </div>
      </div>
    </Main>
  );
};

export default Index;
